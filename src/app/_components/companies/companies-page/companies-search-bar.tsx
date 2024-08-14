"use client";

import { Card, TextInput, Select, SelectItem } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const CompaniesSearchBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("descending");
  useEffect(() => {
    const query = new URLSearchParams();
    query.set("query", search);
    query.set("sortOrder", sortOrder);
    router.push(`/companies?${query.toString()}`);
  }, [search, router, sortOrder]);

  return (
    <Card className="flex items-center gap-4 rounded bg-gray-50 p-4">
      <TextInput
        placeholder="Search for companies"
        className="h-9 w-3/4 rounded text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select
        defaultValue="descending"
        className="h-9 w-1/4 rounded text-sm"
        onValueChange={(value) => setSortOrder(value)}
      >
        <SelectItem className="h-9 rounded" value="ascending">
          Ascending
        </SelectItem>
        <SelectItem className="h-9 rounded" value="descending">
          Descending
        </SelectItem>
      </Select>
    </Card>
  );
};

export default CompaniesSearchBar;
