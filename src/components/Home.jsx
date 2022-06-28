import React, { useState } from "react";
import EditUser from "./EditUser";
import AddUser from "./AddUser";
import StudentList from "./StudentList";

const Home = () => {
  const [editingUser, setEditingUser] = useState(false);

  const editUser = (choice) => {
    choice === "UPDATE" && setEditingUser(true);
    choice === "CANCEL" && setEditingUser(false);
  };
  return (
    <>
      <div className="lg:flex justify-around pt-20 mx-auto">
        {!editingUser && <AddUser />}
        {editingUser && <EditUser editUser={editUser} />}
        {/* Student List */}
        <StudentList editUser={editUser} />
      </div>
    </>
  );
};

export default Home;
