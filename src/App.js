import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./Reducers";
import AppRouter from "./Router.tsx";

/**
 * Configures and creates the Redux store.
 * 
 * @type {Object}
 * @property {Function} reducer - The root reducer for the Redux store.
 * @property {Function} middleware - The middleware configuration, including redux-thunk.
 */
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

/**
 * The main application component that sets up the Redux Provider and the AppRouter.
 * 
 * @component
 * @returns {JSX.Element} The main application component wrapped in a Redux Provider.
 */
const App = () => {
  return (
    <Provider store={store}>
       <AppRouter/>
    </Provider>
  );
}

export default App;
