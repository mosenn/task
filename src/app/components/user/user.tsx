"use client";
import React, { useState } from "react";
import Form from "../form/Form";
import { deleteUser } from "../../service/user";
import { useGlobalContext } from "@/app/context/store";
import Link from "next/link";

import { MdDelete, MdEdit, MdClose } from "react-icons/md";
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

  return (
    <div>
      <section className="my-2 text-xl">
        <p className="my-2">{id}</p>
        <h1 className="my-2">name : {name}</h1>
        <p className="my-2">email : {email}</p>
        <p className="my-2">phone : {phone}</p>
      </section>
      <section className="flex items-center">
        <button
          onClick={() => {
            deleteUser(id, users as [], setUsers as any);
          }}
        >
          <MdDelete
            size={25}
            color={"rgb(248, 120, 120)"}
            className="hover:fill-red-900"
            title="delete"
          />
        </button>
        <button
          className="my-3 p-3"
          onClick={() => {
            // updateUser(id);
            setActiveForm(!activeForm);
          }}
        >
          {activeForm ? (
            <MdEdit
              size={25}
              color={`rgb(123, 183, 123)`}
              className="hover:fill-green-800"
              title="edit"
            />
          ) : (
            <MdClose
              size={25}
              title="close edit"
              color={`rgb(123, 183, 123)`}
              className="hover:fill-green-800"
            />
          )}
        </button>

        <Link className="hover:text-blue-400" href={`/user/${id}`}>
          edit other page
        </Link>
      </section>
      <div
        className={`${
          activeForm
            ? "opacity-0  invisible h-0"
            : "opacity-100 visible  h-full"
        }`}
      >
        <Form
          name={name}
          email={email}
          phone={phone}
          userId={id}
          style={`flex flex-col justify-center items-start py-2 my-2`}
        />
      </div>
    </div>
  );
};
