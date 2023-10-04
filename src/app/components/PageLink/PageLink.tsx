import Link from "next/link";
import React from "react";
interface propsType {
  text: string;
  address: string;
}
const PageLink = ({ text, address }: propsType) => {
  return (
    <div className="flex justify-center p-5  items-start ">
      <Link
        href={address}
        className="text-2xl text-blue-500 hover:text-blue-400"
      >
        {text}
      </Link>
    </div>
  );
};

export default PageLink;
