import CompaniesPage from "../_components/companies/companies-page/companies-page";
import { Suspense } from "react";


export default function Companies() {
  return (
    <div className="">
      <Suspense>
        <CompaniesPage />
      </Suspense>
    </div>
  );
}
