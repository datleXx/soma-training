import Image from "next/image";
import { Button } from "@tremor/react";

interface SingleCompanyHeadTabProps {
  logoUrl: string;
  slug: string;
  name: string;

}

const SingleCompanyHeadTab = ({ logoUrl, slug, name }: SingleCompanyHeadTabProps) => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="py-6 md:flex md:items-center md:justify-between md:space-x-5">
        <div className="flex items-center space-x-5">
          <div className="flex-shrink-0">
            <Image
              src={logoUrl}
              alt={slug}
              width={100}
              height={100}
            />
          </div>
          <div className="my-auto flex flex-col gap-y-2">
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            <p className="text-sm font-medium text-gray-500">Unknown</p>
            <p className="text-sm font-medium text-gray-500">
              <span>Initial investment </span>
              <div>09/01/2024</div>
            </p>
          </div>
        </div>
        <div className="mt-6 flex space-x-3 md:mt-0">
          <Button className="bg-white text-red-400 border-red-400 hover:bg-red-50 hover:text-red-400 hover:border-red-400 cursor-pointer">Favorite</Button>
          <Button className="bg-white text-blue-400 border-blue-400 hover:bg-blue-50 hover:text-blue-400 hover:border-blue-400 cursor-pointer">Request intro</Button>
        </div>
      </div>
    </div>
  );
};

export default SingleCompanyHeadTab;
