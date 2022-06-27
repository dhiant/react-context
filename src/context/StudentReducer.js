export default function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        students: [action.payload, ...state.students],
      };
    case "DELETE":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    case "UPDATE":
      const selectedStudent = action.payload;
      console.log({
        students: state.students.map((student) =>
          student.id === selectedStudent.id
            ? {
                ...selectedStudent,
                name: selectedStudent.name,
                email: selectedStudent.email,
                roll: selectedStudent.roll,
              }
            : student
        ),
        currentStudent: null,
      });
      return {
        students: state.students.map((student) =>
          student.id === selectedStudent.id
            ? {
                ...selectedStudent,
                name: selectedStudent.name,
                email: selectedStudent.email,
                roll: selectedStudent.roll,
              }
            : student
        ),
        currentStudent: null,
      };
    case "SELECT":
      return {
        ...state,
        currentStudent: action.payload,
      };
    default: {
      return state;
    }
  }
}
