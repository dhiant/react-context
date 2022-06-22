import { createContext, useReducer } from "react";

const initialState = {
  transactions: [],
};
//  reducer function
function reducer(state, action) {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
}
// creating context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // delete transaction
  function deleteTransaction(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  // add transaction
  function AddTransaction(transaction) {
    dispatch({ type: "ADD", payload: transaction });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        AddTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
