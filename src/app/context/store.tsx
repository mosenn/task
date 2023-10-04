"use client";
import { allUsers } from "../service/user";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

interface usersType {
  users: [];
  userId: string;
  setUsers: React.Dispatch<React.SetStateAction<[]>>;
}

interface ContextProps {
  users: usersType[];
  setUsers: Dispatch<SetStateAction<usersType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  users: [],
  setUsers: (): usersType[] => [],
});

export const GlobalContextProvider = ({ children }: any) => {
  const [users, setUsers] = useState<[] | usersType[]>([]);

  useEffect(() => {
    const takeAllUsers = async () => {
      const data = await allUsers();
      setUsers(data);
    };
    takeAllUsers();
  }, []);

  return (
    <GlobalContext.Provider value={{ users, setUsers }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
