import { rssUrls, formatRssFeeds, NewsFilter } from "../helper/scrapeHelper";
import { scrapeRssFeeds } from "../helper/scrapeHelper";
import { db } from "~/server/db";

const runTestScrape = async () => {
  const formattedFeeds = await formatRssFeeds(rssUrls);
  for (const feed of formattedFeeds) {
    try {
      if (feed.title && feed.link) {
        console.log(`Scraping ${feed.link} [🚀 Started!]\n`);
        const feedData = await scrapeRssFeeds(feed.link);
        console.log(`Scraping ${feed.link} [✅ Completed!] ... \n`);
        for (const news of feedData) {
          const { status, matchCompanies } = await NewsFilter(news);
          if (status && matchCompanies.length > 0) {
            console.log(
              `[🤖 Debug] --> {\nNews: ${news ? `${news} ✅` : "❌"}\nStatus: ${status ? "✅" : "❌"}\nMatch Companies: ${matchCompanies.length ? `${matchCompanies.length} ✅` : "❌"}\n}\n`,
            );
            console.log(
              `Upserting News: ${news} to Companies: ${matchCompanies.map((company) => company.name).join(", ")} [🚀 Started!]\n`,
            );
            for (const company of matchCompanies) {
              try {
                await db.news.upsert({
                  where: {
                    url: feed.link,
                  },
                  update: {
                    companyId: company.id,
                    title: feed.title,
                    publishedAt: feed.pubDate,
                  },
                  create: {
                    companyId: company.id ?? "",
                    title: feed.title,
                    url: feed.link,
                    publishedAt: feed.pubDate,
                  },
                });
                console.log(
                  `Upserting News: ${news} to Companies: ${matchCompanies.map((company) => company.name).join(", ")} [✅ Completed!]\n`,
                );
              } catch (error) {
                if (error instanceof Error) {
                  console.error(
                    `❌ Failed to upsert news to company ${company.name}:`,
                    error.message,
                  );
                } else {
                  console.error(
                    `❌ Failed to upsert news to company ${company.name}:`,
                    error,
                  );
                }
              }
            }
          } else {
            console.log(
              `[🤖 Debug] --> {\nNews: ${news ? `${news} ✅` : "❌"}\nStatus: ${status ? "✅" : "❌"}\nMatch Companies: ${matchCompanies.length ? `${matchCompanies.length} ✅` : "❌"}\n}`,
            );
          }
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          `❌ Failed to format feed from ${feed.link}:`,
          error.message,
        );
      } else {
        console.error(`❌ Failed to format feed from ${feed.link}:`, error);
      }
    }
  }
  console.log(`Fetching from sites [✅ Completed!]`);
};

runTestScrape();
