"use client";

import PageLink from "@/app/components/PageLink/PageLink";
import Form from "@/app/components/form/Form";
import Link from "next/link";

const url = `https://${process.env.NEXT_PUBLIC_ENV_API_TOKEN}.mockapi.io`;

const user = async (id: string) => {
  const users = await fetch(`${url}/users/${id}`, {});
  return users.json();
};

const uniqUser = async ({
  params,
}: {
  params: { id: string; name: string };
}) => {
  const users = await user(params.id);

  return (
    <div>
      <PageLink text="back to home page" address="/" />

      <div className="">
        <Form
          style={`w-[100%]  h-fit  flex h-screen  justify-center items-center`}
          name={users.name}
          phone={users.phone}
          email={users.email}
          userId={users.id}
        />
      </div>
    </div>
  );
};

export default uniqUser;
