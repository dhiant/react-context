import React from "react";
import Heading from "./Heading";
import EmployeeList from "./EmployeeList";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mt-20  leading-8 text-black font-bold tracking-wide uppercase">
          CRUD App with React Context API and Hooks
        </h3>
        <Heading />
        <EmployeeList />
      </div>
    </>
  );
};

export default Home;
