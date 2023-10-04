"use client";
import { useState } from "react";
import Form from "../components/form/Form";
import { useGlobalContext } from "../context/store";
import Link from "next/link";

const CreateUser = () => {
  const { users } = useGlobalContext();
  console.log(users, "user []");
  return (
    <div>
      {/* <h1>{Myname}</h1> */}
      <Link href="/"> home page</Link>

      <Form name="" phone="" email="" userId="" users={[]} id="" />
    </div>
  );
};

export default CreateUser;
