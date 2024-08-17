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
    <Card className="bg-gray-1s00 flex items-center gap-x-2 rounded">
      <TextInput
        placeholder="Search for companies"
        className="rounded text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select
        defaultValue="descending"
        className="w-fit rounded text-sm"
        onValueChange={(value) => setSortOrder(value)}
      >
        <SelectItem className="rounded" value="ascending">
          Ascending
        </SelectItem>
        <SelectItem className="rounded" value="descending">
          Descending
        </SelectItem>
      </Select>
    </Card>
  );
};

export default CompaniesSearchBar;
