import React, { createContext, useReducer } from "react";
import reducer from "./StudentReducer";

const initialState = {
  students: [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
      roll: 1,
    },
  ],
  currentStudentId: 1,
};
// creating context
export const StudentContext = createContext(initialState);

// providing context
export const StudentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addStudent(student) {
    dispatch({
      type: "ADD",
      payload: student,
    });
  }
  function deleteStudent(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }
  function updateStudent(student) {
    dispatch({
      type: "UPDATE",
      payload: student,
    });
  }
  function setCurrentStudentId(id) {
    dispatch({
      type: "SELECT",
      payload: id,
    });
  }
  return (
    <StudentContext.Provider
      value={{
        students: state.students,
        currentStudentId: state.currentStudentId,
        addStudent,
        deleteStudent,
        updateStudent,
        setCurrentStudentId,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
