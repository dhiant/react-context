import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EditEmployee = (route) => {
  let navigate = useNavigate();
  // data of selected employee to edit
  const [selectedEmployee, setSelectedEmployee] = useState({
    id: null,
    name: "",
    designation: "",
    location: "",
  });
  const { editEmployee, employees } = useContext(GlobalContext);

  // comparing route parameter with parameter in the employee object from the state
  const currentEmployeeId = route.match.params.id;
  useEffect(() => {
    const employeeId = currentEmployeeId;
    const selectedUser = employees.find(
      (employee) => employee.id === parseInt(employeeId)
    );
    setSelectedEmployee(selectedUser);
  }, [currentEmployeeId, employees]);

  // function to update/edit employee details
  function handleChange(userKey, newValue) {
    setSelectedEmployee({ ...selectedEmployee, [userKey]: newValue });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    editEmployee(selectedEmployee);
    navigate("/");
  };

  // when selected id is invalid
  if (!selectedEmployee || !selectedEmployee.id) {
    return <div>Invalid employee id</div>;
  }
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
              value={selectedEmployee.name}
              onChange={(e) => handleChange("name", e.target.value)}
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
              value={selectedEmployee.location}
              onChange={(e) => handleChange("location", e.target.value)}
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
              value={selectedEmployee.designation}
              onChange={(e) => handleChange("designation", e.target.value)}
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

export default EditEmployee;
