import { createContext } from "react";
const initialState = {
  languages: [],
};

const store = createContext(initialState);

const { Provider } = store;
