import { Card } from "@tremor/react";
import Image from "next/image";


interface RecentNewsCardProps {
    image: string;
    title: string;
    year: string;
}

const RecentNewsCard = ({image, title, year}: RecentNewsCardProps) => {
  return (
    <div className="mx-auto max-w-xs cursor-pointer p-1 hover:bg-gray-100 ">
      <div className="flex items-center gap-4 py-4">
        <span className="bg-white rounded p-2">
          <Image src={image} alt="news" width={20} height={20} />
        </span>
        <h1 className="w-1/2 text-sm font-medium text-violet-900 hover:text-violet-500">{title}</h1>
        <p className="text-sm text-gray-500">{year}</p>
      </div>
    </div>
  );
};

export default RecentNewsCard;
