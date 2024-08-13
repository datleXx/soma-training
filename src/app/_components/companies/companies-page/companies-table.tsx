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

const CompaniesTable = () => {
  const searchParams = useSearchParams();
  const filters = JSON.parse(searchParams.get("filters") ?? "{}");
  const router = useRouter();

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    api.companies.fetchCompaniesWithCursor.useInfiniteQuery(
      { filters: filters },
      {
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
      },
    );

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    console.log("Data", data);
  }, [data]);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  return (
    <Card className="mt-6 overflow-auto rounded shadow-lg">
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
                <TableRow onClick={() => router.push(`/companies/${company?.slug}`)} key={company?.id} className="cursor-pointer hover:bg-gray-100">
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
                  <TableCell>
                    {company?.sectors?.map((sector) => sector?.name).join(", ")}
                  </TableCell>
                  <TableCell>{company?.valuation}</TableCell>
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
