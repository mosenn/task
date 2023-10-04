"use client";

import Form from "@/app/components/form/Form";

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

  console.log(users, "users");
  console.log(params);
  return (
    <div>
      update user
      <p>{params.id}</p>
      <p>{users.name}</p>
      <Form
        users={[]}
        id=""
        name={users.name}
        phone={users.phone}
        email={users.email}
        userId={users.id}
      />
    </div>
  );
};

export default uniqUser;
