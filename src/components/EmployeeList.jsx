import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const EmployeeList = () => {
  const { employees } = useContext(GlobalContext);
  console.log(employees);
  return (
    <>
      {employees.length > 0 ? (
        <>
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="flex items-center bg-gray-100 mb-10 shadow"
            >
              <div className="flex-auto text-left px-4 py-2 m-2">
                <p className="text-gray-900 leading-none">{employee.name}</p>
                <p className="text-gray-600">{employee.designation}</p>
                <span className="inline-block text-sm font-semibold mt-1">
                  {employee.location}
                </span>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>
      )}
    </>
  );
};

export default EmployeeList;
