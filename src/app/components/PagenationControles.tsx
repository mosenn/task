"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGlobalContext } from "../context/store";

interface controlProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
const PagenationControls = ({ hasNextPage, hasPrevPage }: controlProps) => {
  const { users } = useGlobalContext();
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? 1;
  const perPage = searchParams.get("per_page") ?? 5;

  const prevPage = () => router.push(`/?page=${+page - 1}&per_page=${perPage}`);
  const nextPage = () => router.push(`/?page=${+page + 1}&per_page=${perPage}`);
  return (
    <div>
      <button disabled={!hasPrevPage} onClick={prevPage}>
        prev
      </button>
      <div>
        {page} / {Math.ceil(users.length / +perPage)}
      </div>
      <button disabled={!hasNextPage} onClick={nextPage}>
        next
      </button>
    </div>
  );
};

export default PagenationControls;
