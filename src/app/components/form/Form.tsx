import React, { useState } from "react";
import { Validation } from "./validation";
import { updateUser, createUser } from "../../service/user";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/context/store";

interface usersType {
  id: string;
  name: string;
  phone: string;
  email: string;
  userId: string;
  users: [];
}

const Form = ({ userId, name, email, phone }: usersType) => {
  const route = useRouter();
  const { users, setUsers } = useGlobalContext();

  const pathName = usePathname();
  const [userValue, setUserValue] = useState({
    name: name,
    email: email,
    phone: phone,
  });
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    empty: "",
    phone: "",
    name: "",
  });
  console.log(name, email, phone);
  // handle inputs , submit , change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue({ ...userValue, [e.target.name]: e.target.value.trim() });
  };
  // console.log(pathName);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: any = Validation(userValue);
    setErrorMessage(errors);
    if (Object.keys(errors).length === 0) {
      setErrorMessage({ email: "", empty: "", phone: "", name: "" });
      if (pathName === "/" || pathName === `/user/${userId}`) {
        updateUser(
          userId as string,
          users as [],
          userValue,
          setUsers as React.Dispatch<React.SetStateAction<any>>
        );
        route.push("/");
      }
      if (pathName === "/create") {
        const response = await createUser(userValue as usersType);
        const newUser = [...users, response];
        setUsers(newUser);
        route.push("/");
      }
    }
  };

  return (
    <div>
      {Object.values(errorMessage).map((err, index) => {
        return <p key={index}>{err}</p>;
      })}
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col  align-center justify-center border border-red-300"
      >
        <input
          className="m-3 p-1 rounded-md"
          type="text"
          placeholder="name"
          onChange={handleChange}
          name="name"
          value={userValue.name}
        />
        <input
          className="m-3 p-1 rounded-md"
          type="text"
          placeholder="email"
          onChange={handleChange}
          name="email"
          value={userValue.email}
        />
        <input
          className="m-3 p-1 rounded-md"
          type="text"
          placeholder="phone"
          name="phone"
          onChange={handleChange}
          value={userValue.phone}
        />

        <button
          className="bg-green-700 hover:bg-green-800 text-white rounded-md p-1 ml-3 w-28 "
          type="submit"
        >
          {pathName === "/" || pathName === `/user/${userId}`
            ? "update user"
            : "create user"}
        </button>
      </form>
    </div>
  );
};

export default Form;
