import React, { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");

  // consuming context
  const { addStudent, students } = useContext(StudentContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // adding student
    const newStudent = {
      id: Math.random(),
      name,
      email,
      roll,
    };
    addStudent(newStudent);
    // clear state values
    setName("");
    setEmail("");
    setRoll("");
  };
  return (
    <div className="max-w-md flex-grow mx-auto">
      <h2 className="text-2xl text-black font-bold mb-6 uppercase">
        Student App with Context API and Hooks
      </h2>
      <h2 className="text-2xl text-black font-semibold mb-6">Add User</h2>
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
          className="bg-[#51ca5b] px-4 py-3 mt-7 rounded text-base font-bold text-white"
        >
          Add new user
        </button>
      </form>
    </div>
  );
};

export default Form;
