import {Card, TextInput,Select, SelectItem } from "@tremor/react";

const CompaniesSearchBar = () => {
  return (
    <Card className="flex items-center gap-4 p-4 bg-gray-50 rounded">
      <TextInput
        placeholder="Search for companies"
        className="rounded h-9 w-3/4 text-sm"
      />
      <Select defaultValue="valuation" className="rounded h-9 w-1/4 text-sm">
        <SelectItem className="rounded h-9" value="valuation">Valuation</SelectItem>
        <SelectItem className="rounded h-9" value="newest">Newest</SelectItem>
      </Select>
    </Card>
  );
};

export default CompaniesSearchBar;