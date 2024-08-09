import { Card } from "@tremor/react";
import RecentNewsCard from "./recent-news-card";
import { Button } from "@tremor/react";

const RecentNews = () => {
  const news = [
    {
      title:
        "Electric Motor Startup H3X Raises $20 Million With Additional Funding From Lockheed Martin - Defense Daily Network",
      year: "2024",
      image:
        "https://storage.googleapis.com/pulumi-public-bucket-soma-78c41ee/040b4cf6b9848d2e1168307c5a3136677465560b/H3X-harmonic-logo",
    },
  ];
  return (
    <Card className="mt-5 rounded p-2 shadow-xl">
      <h1 className="p-3 text-lg font-medium">Recent news</h1>
      <div className="flex flex-col">
        {Array.from({ length: 3 }).map((_, index) => (
          <RecentNewsCard
            key={index}
            title={news[0]?.title ?? ""}
            year={news[0]?.year ?? ""}
            image={news[0]?.image ?? ""}
          />
        ))}
      </div>
      <div className="my-5">
        <div className="mx-auto w-5/6">
          <Button className="rounded w-full border border-gray-400 bg-white text-gray-500 hover:border-gray-500 hover:bg-gray-200">
            View all
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default RecentNews;
