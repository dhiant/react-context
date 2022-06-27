import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentList = ({ editUser }) => {
  const { students, deleteStudent, updateStudent, setCurrentStudent } =
    useContext(StudentContext);
  return (
    <>
      <div className="lg:flex-grow max-w-md lg:max-w-2xl mx-auto mt-14 lg:m-0">
        <h2 className="text-2xl text-black font-semibold mb-6">View Users</h2>
        {students.length > 0 ? (
          <table className="table-auto">
            <thead>
              <tr className="px-4 py-4">
                <th className="px-2 sm:px-10">Name</th>
                <th className="px-2 sm:px-20">Email</th>
                <th className="px-2 sm:px-10">Roll No</th>
                <th className="px-2 sm:px-16">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr className="bg-gray-200 text-center" key={student.id}>
                  <td className="">{student.name}</td>
                  <td className="">{student.email}</td>
                  <td className="">{student.roll}</td>
                  <td className="">
                    <button
                      className="bg-[#0366EE] px-2 py-1   rounded text-base font-semibold text-white"
                      onClick={() => {
                        editUser("UPDATE");
                        setCurrentStudent(student.id);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="bg-[#e21515f9] px-2 py-1 ml-5  rounded text-base font-semibold text-white"
                      onClick={() => deleteStudent(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2 className="text-xl font-semibold">No data</h2>
        )}
      </div>
    </>
  );
};

export default StudentList;
