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
      <div>
        <Form
          name=""
          phone=""
          email=""
          userId=""
          style={`w-[100%]  h-fit  flex h-screen  justify-center items-center`}
        />
      </div>
    </div>
  );
};

export default CreateUser;
