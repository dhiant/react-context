import { createContext, useReducer } from "react";

const initialState = {
  transactions: [
    { id: 1, text: "flower", amount: -20 },
    { id: 2, text: "Salary", amount: 20 },
    { id: 3, text: "Book", amount: 200 },
    { id: 4, text: "Camera", amount: 320 },
    { id: 5, text: "PC", amount: 420 },
  ],
};
//  reducer function
function reducer(state, action) {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.id
        ),
      };
    default:
      return state;
  }
}
// creating context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function deleteTransaction(id) {
    dispatch({ type: "DELETE", id: id });
  }
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
