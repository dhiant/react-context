export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [action.payload, ...state.employees],
      };
    case "EDIT_EMPLOYEE":
      const updatedEmployee = action.payload;
      const updatedEmployees = state.employees.map((employee) => {
        if (employee.id === updatedEmployee.id) {
          return updatedEmployees;
        }
        return employee;
      });
      return {
        ...state,
        employees: updatedEmployees,
      };
    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
