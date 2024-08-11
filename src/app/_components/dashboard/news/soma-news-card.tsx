import { Card } from "@tremor/react";


interface SomaNewsCardProps {
    title: string;
    year: string;
}

const SomaNewsCard = ({title, year}: SomaNewsCardProps) => {
  return (
    <div className="mx-8 max-w-md cursor-pointer p-1 hover:bg-gray-100">
      <div className="flex items-center justify-between py-4">
        <span className="bg-violet-50 rounded p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="indigo"
            strokeOpacity={1.5}
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
            />
          </svg>
        </span>
        <h1 className="w-1/2 text-sm font-medium text-violet-900 hover:text-violet-500">{title}</h1>
        <p className="text-sm text-gray-500">{year}</p>
      </div>
    </div>
  );
};

export default SomaNewsCard;
