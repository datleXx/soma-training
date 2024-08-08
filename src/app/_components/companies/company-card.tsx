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
    <div className="flex items-center justify-between rounded-lg p-4 border-b border-gray-200 hover:bg-gray-50">
      <div className="flex items-center gap-4 py-4">
        <Image
          className="rounded"
          src={companyImg}
          alt={companyName}
          width={60}
          height={60}
        />
        <div className="w-1/2">
          <h3 className="text-md font-semibold">{companyName}</h3>
          <p className="text-sm text-gray-500">{companyDescription}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-500">{companyBase}</div>
        <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
          {companyType}
        </div>
        <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
          {companyValuation}
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
