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
  currentStudent: null,
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
  function setCurrentStudent(id) {
    dispatch({
      type: "SELECT",
      payload: id,
    });
  }
  return (
    <StudentContext.Provider
      value={{
        students: state.students,
        currentStudent: state.currentStudent,
        addStudent,
        deleteStudent,
        updateStudent,
        setCurrentStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
