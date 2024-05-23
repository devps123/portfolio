import { combineReducers } from "redux";
import blogsReducer from "./blogsReducer";

/**
 * Root reducer function that combines all reducers.
 * 
 * @param {object} state - Current state of the application.
 * @param {object} action - The dispatched action.
 * @returns {object} New state after applying the action.
 */
const rootReducer = combineReducers({
  blogs: blogsReducer,
  // We can add more reducers here, right now I have static data in some files.
});

export default rootReducer;
