import {
  Card,
  Divider,
} from "@tremor/react";

interface SingleCompanyAboutTabProps {
  about: string;
  oneLiner: string;
  website: string;
  region: string;
  primarySector: string;
  otherSectors: string;
  valuation: string;
}

const SingleCompanyAboutTab = ({ about, oneLiner, website, region, primarySector, otherSectors, valuation }: SingleCompanyAboutTabProps) => {
  return (
    <Card>
      <p className="text-lg font-medium">Company Information</p>
      <Divider />
      <div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">Valuation</p>
            <p className="mt-1 text-sm text-gray-900">{valuation}</p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">Website</p>
            <p className="mt-1 text-sm font-medium text-violet-900 hover:text-violet-700 cursor-pointer">{website}</p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">Region</p>
            <p className="mt-1 text-sm text-gray-900">{region}</p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">City/ Country</p>
            <p className="mt-1 text-sm text-gray-900">{region}</p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">Primary Sector</p>
            <p className="mt-1 text-sm text-gray-900">{primarySector}</p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">Other Sectors</p>
            <p className="mt-1 text-sm text-gray-900">{otherSectors}</p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">One Liner</p>
            <p className="mt-1 text-sm text-gray-900">{oneLiner}</p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">Fund</p>
            <p className="mt-1 text-sm text-gray-900">Fund |||</p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">Other Investors</p>
            <p className="mt-1 text-sm text-gray-900">Founders Fund, Boxgroup, Coatue Management, Stripe, D1</p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">Headcount (est)</p>
            <p className="mt-1 text-sm text-gray-900">500</p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">Valuation</p>
            <p className="mt-1 text-sm text-gray-900">{valuation}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-sm font-medium text-gray-500">About</p>
            <p className="mt-1 text-sm text-gray-900">
              {about}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SingleCompanyAboutTab;
