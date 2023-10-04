"use client";
import React, { useEffect } from "react";
import WrapperUser from "../wrapperUser";
import PagenationControls from "../PagenationControles";
import { useGlobalContext } from "@/app/context/store";
const HomeWrapper = ({ searchParams }: any) => {
  const { users } = useGlobalContext();

  const page = searchParams["page"] ?? 1;
  const perPage = searchParams["per_page"] ?? 5;
  const start = (+page - 1) * +perPage;
  const end = start + +perPage;

  const entries = users.slice(start, end);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WrapperUser entries={entries} />
      <PagenationControls
        hasNextPage={end < users.length}
        hasPrevPage={start > 0}
      />
    </main>
  );
};

export default HomeWrapper;
