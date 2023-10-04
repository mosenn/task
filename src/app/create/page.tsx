"use client";
import { useState } from "react";
import Form from "../components/form/Form";
import { useGlobalContext } from "../context/store";
import Link from "next/link";
import PageLink from "../components/PageLink/PageLink";

const CreateUser = () => {
  const { users } = useGlobalContext();

  return (
    <div className="  justify-center items-center">
      <PageLink text="back to home page" address="/" />
      <div className="flex justify-center">
        <Form
          name=""
          phone=""
          email=""
          userId=""
          style={`w-[100%]  h-fit  flex flex-col h-fit  justify-center items-start md:flex-row md:items-center`}
        />
      </div>
    </div>
  );
};

export default CreateUser;
