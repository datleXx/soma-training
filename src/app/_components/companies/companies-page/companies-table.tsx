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
import { useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const CompaniesTable = () => {
  const { data: companies, isLoading } =
    api.companies.fetchMultipleCompanies.useQuery();

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    api.companies.fetchCompaniesWithCursor.useInfiniteQuery(
      { cursor: "" },
      {
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
      },
    );

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    console.log("data: ", data);
  }, [data]);
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
              .flatMap((page) => page.batch?.companies)
              .map((company) => (
                <TableRow key={company?.id}>
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
                  <TableCell>Technology</TableCell>
                  <TableCell>{company?.valuation}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        )}
      </Table>
      {hasNextPage && (
        <div ref={ref}>
          <Table>
              <CompanyTableSkeleton />
          </Table>
        </div>
      )}
    </Card>
  );
};

export default CompaniesTable;
