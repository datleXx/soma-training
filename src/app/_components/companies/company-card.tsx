import Image from "next/image";

interface CompanyCardProps {
  companyImg: string;
  companyName: string;
  companyDescription: string;
  companyValuation: string;
  companyType: string;
  companyBase: string;
}

const CompanyCard = ({
  companyImg,
  companyName,
  companyDescription,
  companyValuation,
  companyType,
  companyBase,
}: CompanyCardProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg border-b border-gray-200 hover:bg-gray-50">
      <div className="flex items-center gap-6 p-4">
        <Image
          className="rounded"
          src={companyImg}
          alt={companyName}
          width={60}
          height={60}
        />
        <div className="w-1/2">
          <h3 className="text-sm font-medium">{companyName}</h3>
          <p className="text-sm text-gray-400">{companyDescription}</p>
        </div>
        <div className="text-sm text-gray-500 hidden lg:block">{companyBase}</div>
        <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 hidden lg:block">
          {companyType}
        </div>
        <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 hidden lg:block">
          {companyValuation}
        </div>
      </div>
      {/* <div className="flex items-center gap-4"></div> */}
    </div>
  );
};

export default CompanyCard;
