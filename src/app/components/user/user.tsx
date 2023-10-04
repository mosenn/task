"use client";
import React, { useState } from "react";
import Form from "../form/Form";
import { deleteUser } from "../../service/user";
import { useGlobalContext } from "@/app/context/store";
import Link from "next/link";
interface singleUser {
  id: string;
  users: [];
  name: string;
  email: string;
  phone: string;
}
export const SingleUser = ({ id, name, email, phone }: singleUser) => {
  const [activeForm, setActiveForm] = useState(true);
  const { users, setUsers } = useGlobalContext();
  // console.log(setUsers, "single user setUsers");
  // console.log(users, "single user all user");
  console.log(id, "id in singleUser");
  return (
    <div key={id}>
      <p>{id}</p>

      <h1>{name}</h1>

      <p>{email}</p>
      <p>{phone}</p>
      <button
        onClick={() => {
          deleteUser(id, users as [], setUsers as any);
        }}
        className="p-3 m-3 bg-red-300"
      >
        delete
      </button>
      <button
        onClick={() => {
          // updateUser(id);
          setActiveForm(!activeForm);
        }}
        className="p-3 m-3 bg-green-300"
      >
        edit{" "}
      </button>

      <Link href={`/user/${id}`}>edit in page</Link>
      <div
        className={`${
          activeForm
            ? "opacity-0  invisible h-0"
            : "opacity-100 visible  h-full"
        }`}
      >
        <Form name={name} email={email} phone={phone} userId={id} />
      </div>
    </div>
  );
};
