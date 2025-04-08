"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Pagination = ({ currentPage, totalRecords, pageSize }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(totalRecords / pageSize);
  if (totalPages <= 1) return null;

  return (
    <ul className="pagination lab-ul">
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;

        // Clone current query params
        const params = new URLSearchParams(searchParams.toString());

        // Update the offset
        params.set("offset", pageNumber);

        const href = `${pathname}?${params.toString()}`;

        return (
          <li key={pageNumber}>
            <Link
              href={href}
              className={currentPage === pageNumber ? "active" : ""}
            >
              {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
