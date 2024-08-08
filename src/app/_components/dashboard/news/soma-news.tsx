import SomaNewsCard from "./soma-news-card";

const SomaNews = () => {
    const news = [
        {title: "The most active investors in generative AI", year: "2024"},
        {title: "The Midas Seed List - Aneel Ranadive", year: "2024"},
        {title: "Y Combinators Investment Syndicate Map: Who backs the most YC startups?", year: "2024"},
    ]
    return (
        <div className="mt-5 max-w-sm rounded-lg border border-gray-200 shadow-md mx-5 p-3">
            <h1 className="text-lg font-medium p-3">Soma in the news</h1>
            <div className="flex flex-col mt-4">
                {news.map((item, index) => (
                    <SomaNewsCard key={index} title={item.title} year={item.year} />
                ))}
            </div>
        </div>
    )
}

export default SomaNews;