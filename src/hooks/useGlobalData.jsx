import { createContext, useContext, useReducer } from "react";

const initialState = { favorite: [] };

function dataReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, favorite: [...state.favorite, action.payload] };
    case "DELETE":
      return {
        ...state,
        favorite: state.favorite.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

const DataContext = createContext();

export function DataProvider({ children }) {
  const [store, dispatch] = useReducer(dataReducer, initialState);
  return (
    <DataContext.Provider value={{ store, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
export default function useGlobalData() {
  return useContext(DataContext);
}
