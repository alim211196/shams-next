import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../features/student/auth/authSlice";
import studentReducer from "../features/student/auth/studentSlice";
import settingsReducer from "../features/student/auth/settingsSlice";
import courseFormReducer from "../features/Course/courseFormSlice";

const courseFormPersistConfig = {
  key: "courseForm",
  storage,
};

const persistedCourseFormReducer = persistReducer(
  courseFormPersistConfig,
  courseFormReducer
);

const store = configureStore({
  reducer: {
    // user: userReducer,
    // student: studentReducer,
    settings: settingsReducer,
    courseForm: persistedCourseFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

const persistor = persistStore(store);
export { store, persistor };
