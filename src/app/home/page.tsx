import React from "react";
interface params {
  searchParams: string;
}
import HomeWrapper from "../components/homeWrapper/homeWrapper";
const HomePage = ({ searchParams }: params) => {
  return (
    <div>
      <HomeWrapper searchParams={searchParams} />
    </div>
  );
};

export default HomePage;
