import React from "react";

const Home = () => {
  return (
    <>
      <div className="lg:flex justify-around pt-20 mx-auto">
        <div className="max-w-md flex-grow mx-auto">
          <h2 className="text-2xl text-black font-bold mb-6 uppercase">
            Student App with Context API and Hooks
          </h2>
          <h2 className="text-2xl text-black font-semibold mb-6">Add User</h2>
          <form>
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
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
              className="w-full rounded border-2 border-gray-400 px-2 py-1 mb-2 focus:outline outline-1 outline-blue-400"
            />
            <button
              type="submit"
              className="bg-[#0366EE] px-4 py-3 mt-7 rounded text-base font-bold text-white"
            >
              Add new user
            </button>
          </form>
        </div>
        {/* Student List */}
        <div className="lg:flex-grow max-w-2xl mx-auto">
          <h2 className="text-2xl text-black font-semibold mb-6">View Users</h2>
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
              <tr className="bg-gray-200 text-center">
                <td className="">John Doe</td>
                <td className="">johndoe@gmail.com</td>
                <td className="">21</td>
                <td className="">
                  <button className="bg-[#0366EE] px-2 py-1   rounded text-base font-semibold text-white">
                    Update
                  </button>
                  <button className="bg-[#e21515f9] px-2 py-1 ml-5  rounded text-base font-semibold text-white">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
