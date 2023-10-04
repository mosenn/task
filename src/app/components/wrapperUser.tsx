import React, { useState, useEffect } from "react";
import { SingleUser } from "@/app/components/user/user";
import Link from "next/link";
const WrapperUser = ({ entries }: any) => {
  return (
    <div>
      <Link href="/create" className="text-2xl">
        create user
      </Link>

      {entries.length > 0 ? (
        entries?.map((data: any) => {
          return (
            <div key={data.id}>
              <SingleUser {...data} />
            </div>
          );
        })
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default WrapperUser;
