import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../context/StudentContext";

const EditUser = ({ editUser }) => {
  // consuming context
  const { students, currentStudentId, updateStudent } =
    useContext(StudentContext);
  const studentData = students.filter(
    (student) => student.id === currentStudentId
  )[0];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");

  useEffect(() => {
    if (studentData) {
      setName(studentData.name);
      setEmail(studentData.email);
      setRoll(studentData.roll);
    }
  }, [studentData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent({
      id: studentData.id,
      name,
      email,
      roll,
    });
    editUser("CANCEL");
    setName("");
    setEmail("");
    setRoll("");
  };
  return (
    <div className="max-w-md flex-grow mx-auto">
      <h2 className="text-2xl text-black font-bold mb-6 uppercase">
        Student App with Context API and Hooks
      </h2>
      <h2 className="text-2xl text-black font-semibold mb-6">Update User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border-2 border-gray-400 px-2 py-1 mb-2 focus:outline outline-1 outline-blue-400"
        />
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@gmail.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border-2 border-gray-400 px-2 py-1 mb-2 focus:outline outline-1 outline-blue-400"
        />
        <label htmlFor="roll" className="block">
          Roll No
        </label>
        <input
          type="text"
          name="number"
          id="number"
          placeholder="roll no"
          required
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          className="w-full rounded border-2 border-gray-400 px-2 py-1 mb-2 focus:outline outline-1 outline-blue-400"
        />
        <button
          type="submit"
          className="bg-[#51ca5b] px-4 py-2 mt-7 rounded text-base font-bold text-white"
        >
          Update user
        </button>
        <button
          className="text-gray-900 px-4 py-2 mt-7 rounded text-base ml-10  border-2 border-gray-500"
          onClick={() => editUser("CANCEL")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;
