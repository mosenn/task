import React, { useState, useEffect } from "react";
import { SingleUser } from "@/app/components/user/user";
import Link from "next/link";
import PageLink from "./PageLink/PageLink";

const WrapperUser = ({ entries }: any) => {
  return (
    <div>
      <PageLink text="create user" address="/create" />

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
