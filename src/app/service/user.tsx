interface usersType {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const url = `https://${process.env.NEXT_PUBLIC_ENV_API_TOKEN}.mockapi.io`;

export const allUsers = async () => {
  const response = await fetch(`${url}/users`);
  return response.json();
};

export const createUser = async (userValue: usersType, userId: string) => {
  try {
    const response = await fetch(`${url}/users`, {
      method: "POST",
      body: JSON.stringify({
        id: userId,
        name: userValue.name,
        email: userValue.email,
        phone: userValue.phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    // status is Ok
    if (response.status === 201) {
      const newUser = await response.json();
      return newUser;
      // setUsers(...user, newUser);
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (
  userId: string,
  user: usersType[],
  userValue: { name: string; email: string; phone: string },
  setUsers: React.Dispatch<React.SetStateAction<usersType[]>>
) => {
  try {
    const response = await fetch(
      `${url}/users/${userId}`,

      {
        method: "PUT",
        body: JSON.stringify({
          id: userId,
          name: userValue.name,
          email: userValue.email,
          phone: userValue.phone,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    // status is Ok

    if (response.status === 200) {
      const update = await response.json();
      // update user
      const updatedUsers = user.map((u: usersType) => {
        if (u.id === userId) {
          return {
            id: userId,
            name: update.name,
            email: update.email,
            phone: update.phone,
          };
        }

        return u;
      });
      await setUsers(updatedUsers as any);
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (
  userId: string,
  users: usersType[],
  setUsers: React.Dispatch<React.SetStateAction<usersType[]>>
) => {
  try {
    const response = await fetch(`${url}/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();

    // || response.status === 204
    if (response.status === 200) {
      const deleteUser = await users.filter((u: usersType) => u.id !== userId);

      await setUsers(deleteUser);
    } else {
      throw new Error("someting worng");
    }
  } catch (err) {
    console.log(err);
  }
};
