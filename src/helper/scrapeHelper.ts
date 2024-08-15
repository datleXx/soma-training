import scrapflyClient from "../server/scrapeflyClient";
import { ScrapeConfig, ScrapeResult } from "scrapfly-sdk";
import Parser from "rss-parser";
import * as cheerio from "cheerio";
import { db } from "~/server/db";
import typesenseClient from "~/server/typesenseClient";
import { CompaniesInfiniteQueryResponse } from "./companiesHelper";

export interface RssFeedItem {
  title: string;
  link: string;
  pubDate: string;
}

export interface companyRelatedNews {
  companyName: string;
  title: string;
  link: string;
  pubDate: string;
}

export const rssUrls = [
  "https://techcrunch.com/feed/",
  "https://techcrunch.com/category/startups/feed/",
  "https://www.cnbc.com/id/19854910/device/rss/rss.html",
  "https://www.economist.com/science-and-technology/rss.xml",
  "http://feeds.feedburner.com/venturebeat/SZYF",

  "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
  "http://feeds.feedburner.com/typepad/alleyinsider/silicon_alley_insider",
  "http://feeds.washingtonpost.com/rss/business/technology",
  "https://hnrss.org/newest",
  "https://gizmodo.com/rss",
  "https://feeds.arstechnica.com/arstechnica/technology-lab",
  "https://www.reutersagency.com/feed/?best-topics=tech",
  "https://www.wired.com/feed/category/business/latest/rss",
  "https://www.wired.com/feed/tag/ai/latest/rss",
  "https://www.theverge.com/rss/index.xml",
  "https://venturebeat.com/feed/",
  "https://www.prnewswire.com/rss/consumer-technology-latest-news/consumer-technology-latest-news-list.rss",
  "https://www.prnewswire.com/rss/financial-services-latest-news.rss",
  "https://news.google.com/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR2d3TVdZU0FtVnVLQUFQAQ?hl=en-US&gl=US&ceid=US%3Aen",
];

export async function scrapeRssFeeds(link: string) {
  const result = await scrapflyClient.scrape(
    new ScrapeConfig({
      url: link,
      method: "GET",
      headers: {
        "X-Csrf-Token": "1234",
      },
      debug: true,
      cache: true,
      cache_ttl: 3600,
      asp: true,
      country: "US,CA,FR",
      render_js: true,
      wait_for_selector: "body",
    }),
  );
  const htmlContent = result.result.content;
  const links = await extractLinksFromHtml(htmlContent);

  return links;
}

// export async function parseRssFeeds(rssFeeds: ScrapeResult[]) {
//   const parser = new Parser();
//   const validFeeds: Parser.Output<any>[] = [];

//   for (const rss of rssFeeds) {
//     try {
//       const feed = await parser.parseString(rss.result.content);
//       validFeeds.push(feed);
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error(
//           `Failed to parse feed from ${rss.result.url}:`,
//           error.message,
//         );
//       } else {
//         console.error(`Failed to parse feed from ${rss.result.url}:`, error);
//       }
//     }
//   }

//   if (
//     validFeeds.length > 0 &&
//     validFeeds[0] &&
//     validFeeds[0].items &&
//     validFeeds[0].items.length > 0
//   ) {
//     console.log(validFeeds[0].items[0]);
//   } else {
//     console.log("No valid feeds or items found.");
//   }
//   return validFeeds;
// }

export async function extractLinksFromHtml(htmlContent: string) {
  const $ = cheerio.load(htmlContent);
  const links: string[] = [];
  $("body a").each((i, el) => {
    const href = $(el).attr("href");
    if (href && href.startsWith("https:")) {
      links.push(href);
    }
  });
  return links;
}

export async function formatRssFeeds(urls: string[]) {
  const formattedFeeds: RssFeedItem[] = [];
  const parser = new Parser();
  for (const url of urls) {
    try {
      const feed = await parser.parseURL(url);
      feed.items.map((item) => {
        if (item.title && item.link) {
          formattedFeeds.push({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate ?? item.isoDate ?? new Date().toISOString(),
          });
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Failed to parse feed from ${url}:`, error.message);
      } else {
        console.error(`Failed to parse feed from ${url}:`, error);
      }
    }
  }
  return formattedFeeds;
}

export async function getPrismaCompanyInfo() {
  try {
    const company = await db.company.findMany({
      select: {
        name: true,
        id: true,
        websiteUrl: true,
      },
    });

    return company;
  } catch (error) {
    console.error(error);
  }
}

export async function NewsFilter(newsUrl: string) {
  try {
    const newsDomain = new URL(newsUrl).hostname;

    const searchParameters = {
      q: newsDomain,
      query_by: "websiteUrl",
      per_page: 100,
    };
    const searchResults = await typesenseClient
      .collections("companies")
      .documents()
      .search(searchParameters);
    const matchCompanies: CompaniesInfiniteQueryResponse[] =
      searchResults.hits?.map((hit) => hit.document) ?? [];

    if (matchCompanies && matchCompanies.length > 0) {
      return { status: true, matchCompanies };
    }
    return { status: false, matchCompanies: [] };
  } catch (error) {
    console.error("Error extracting domains:", error);
    return { status: false, matchCompanies: [] };
  }
}
