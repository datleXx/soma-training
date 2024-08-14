import SomaNewsCard from "./soma-news-card";
import { Card } from "@tremor/react";

const SomaNews = () => {
  const news = [
    { title: "The most active investors in generative AI", year: "2024" },
    { title: "The Midas Seed List - Aneel Ranadive", year: "2024" },
    {
      title:
        "Y Combinators Investment Syndicate Map: Who backs the most YC startups?",
      year: "2024",
    },
  ];
  return (
    <Card className="rounded-md p-2">
      <h1 className="p-3 text-lg font-medium">Soma in the news</h1>
      <div className="">
        {news.map((item, index) => (
          <SomaNewsCard key={index} title={item.title} year={item.year} />
        ))}
      </div>
    </Card>
  );
};

export default SomaNews;
