"use client";

import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@tremor/react";
import Image from "next/image";
import { api } from "~/trpc/react";
import CompanyTableSkeleton from "../skeleton/company-table-skeleton";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "next/navigation";
import { CompanyDataType } from "~/helper/companiesHelper";
import { useRouter } from "next/navigation";
import { getValuation } from "~/helper/companiesHelper";

const CompaniesTable = () => {
  const searchParams = useSearchParams();
  const filters = JSON.parse(searchParams.get("filters") ?? "{}");
  const router = useRouter();
  const sortOrder = searchParams.get("sortOrder") ?? "ascending";
  const query = searchParams.get("query") ?? "";
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    api.companies.fetchCompaniesWithTypesense.useInfiniteQuery(
      { filters: filters, sortOrder: sortOrder, query: query },
      {
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
      },
    );

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  return (
    <Card className="overflow-y-auto rounded shadow-lg scrollbar-hide">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Company</TableHeaderCell>
            <TableHeaderCell>Region</TableHeaderCell>
            <TableHeaderCell>Industry</TableHeaderCell>
            {/* <TableHeaderCell>Investment Date</TableHeaderCell> */}
            <TableHeaderCell>Valuation</TableHeaderCell>
          </TableRow>
        </TableHead>
        {isLoading ? (
          <CompanyTableSkeleton />
        ) : (
          <TableBody>
            {data?.pages
              ?.flatMap((page) => page?.companiesList)
              .map((company) => (
                <TableRow
                  onClick={() => router.push(`/companies/${company?.slug}`)}
                  key={company?.id}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={company?.logoUrl ?? ""}
                        alt={company?.name ?? ""}
                        width={40}
                        height={40}
                      />
                      <div>
                        <div className="font-semibold text-black">
                          {company?.name}
                        </div>
                        <div className="whitespace-normal text-xs text-gray-500">
                          {company?.oneLiner}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{company?.region}</TableCell>
                  <TableCell className="whitespace-normal">
                    {company?.sectors?.map((sector) => sector).join(", ")}
                  </TableCell>
                  <TableCell>{getValuation(company?.valuation ?? 7)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        )}
      </Table>
      {isFetchingNextPage && hasNextPage && (
        <Table>
          <CompanyTableSkeleton />
        </Table>
      )}
      <div ref={ref}></div>
    </Card>
  );
};

export default CompaniesTable;
