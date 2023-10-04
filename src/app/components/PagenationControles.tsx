"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGlobalContext } from "../context/store";

interface controlProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
const PagenationControls = ({ hasNextPage, hasPrevPage }: controlProps) => {
  const { users } = useGlobalContext();
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? 1;
  const perPage = searchParams.get("per_page") ?? 5;

  const prevPage = () => router.push(`/?page=${+page - 1}&per_page=${perPage}`);
  const nextPage = () => router.push(`/?page=${+page + 1}&per_page=${perPage}`);
  return (
    <section className="flex items-center">
      <button disabled={!hasPrevPage} onClick={prevPage}>
        <BsArrowLeftShort
          size={35}
          fill={hasPrevPage ? "black" : "gray"}
          className={`${hasPrevPage && "hover:fill-blue-400"}`}
        />
      </button>
      <div>
        {page} / {Math.ceil(users.length / +perPage)}
      </div>
      <button disabled={!hasNextPage} onClick={nextPage}>
        <BsArrowRightShort
          size={35}
          fill={hasNextPage ? "black" : "gray"}
          className={`${hasNextPage && "hover:fill-blue-400"}`}
        />
      </button>
    </section>
  );
};

export default PagenationControls;
