"use client";

import {Card, TextInput,Select, SelectItem } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const CompaniesSearchBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const query = new URLSearchParams();
    query.set("query", search);
    router.push(`/companies?${query.toString()}`);
  }, [search, router]);


  return (
    <Card className="flex items-center gap-4 p-4 bg-gray-50 rounded">
      <TextInput
        placeholder="Search for companies"
        className="rounded h-9 w-3/4 text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select defaultValue="valuation" className="rounded h-9 w-1/4 text-sm">
        <SelectItem className="rounded h-9" value="valuation">Valuation</SelectItem>
        <SelectItem className="rounded h-9" value="newest">Newest</SelectItem>
      </Select>
    </Card>
  );
};

export default CompaniesSearchBar;