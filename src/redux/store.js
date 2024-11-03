import { configureStore, combineReducers } from "@reduxjs/toolkit";

import contactsReducer from "./contactSlice";
import filtersReducer from "./filterSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
