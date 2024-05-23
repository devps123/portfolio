import { GET_BLOGS, GET_BLOGS_FAILURE, GET_BLOGS_SUCCESS } from "../Actions/actionsConstants";

/**
 * Represents the initial state of the blogs reducer.
 * 
 * @type {object}
 * @property {Array} myBlogs - Array of blog posts.
 * @property {boolean} loading - Indicates if blogs are being loaded.
 * @property {boolean} hasErrors - Indicates if an error occurred while fetching blogs.
 */
export const initialState = {
  myBlogs: [],
  loading: false,
  hasErrors: false,
};

/**
 * Reducer function for managing state related to blogs.
 * 
 * @param {object} state - Current state of the blogs.
 * @param {object} action - The dispatched action.
 * @returns {object} New state after applying the action.
 */
export default function blogsReducer(state = initialState, action) {
  // Create a copy of previousBlogs to avoid mutating state directly
  const previousBlogs = [...state.myBlogs];
  
  // Switch based on the action type
  switch (action.type) {
    case GET_BLOGS:
      return { ...state, loading: true };
    case GET_BLOGS_SUCCESS:
      // Concatenate new blogs with previous ones
      return { ...state, myBlogs: [...previousBlogs, ...action.payload], loading: false };
    case GET_BLOGS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
