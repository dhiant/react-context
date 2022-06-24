import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

const AddEmployee = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");

  // consuming context
  const { addEmployee, employees } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    // add new employee
    const newEmployee = {
      name,
      location,
      designation,
      id: employees.length + 1,
    };
    addEmployee(newEmployee);
    // clean the state once new employee is added
    setName("");
    setLocation("");
    setDesignation("");
    navigate("/");
  };
  return (
    <>
      <div className="w-full max-w-sm mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of employee
            </label>
            <input
              className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Enter location"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="designation"
            >
              Designation
            </label>
            <input
              className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              type="text"
              placeholder="Enter designation"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Employee
            </button>
            <div className="text-center mt-4 text-gray-500">
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
