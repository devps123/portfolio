import { endPoints } from "./apiEndPoints";
import { GET_BLOGS, GET_BLOGS_FAILURE, GET_BLOGS_SUCCESS } from "./actionsConstants";

/**
 * Action type for initiating the blog fetching process.
 * @type {string}
 */

/**
 * Action type for successfully fetched blogs.
 * @type {string}
 */

/**
 * Action type for a failed blog fetch.
 * @type {string}
 */

// Define Redux action types

/**
 * Creates an action to get blogs.
 * @returns {Object} The action object.
 */
export const getBlogs = () => ({
  type: GET_BLOGS,
});

/**
 * Creates an action to handle successful fetching of blogs.
 * @param {Array} posts - The list of blog posts fetched.
 * @returns {Object} The action object.
 */
export const getBlogsSuccess = (posts) => ({
  type: GET_BLOGS_SUCCESS,
  payload: posts,
});

/**
 * Creates an action to handle the failure of fetching blogs.
 * @returns {Object} The action object.
 */
export const getBlogsfailure = () => ({
  type: GET_BLOGS_FAILURE,
});

/**
 * Fetches blogs asynchronously and dispatches actions based on the fetch result.
 * @param {number} pageNum - The page number to fetch blogs for.
 * @returns {Function} A thunk that dispatches actions.
 */
export const fetchBlogs = (pageNum) => {
  return async (dispatch) => {
    dispatch(getBlogs());
    try {
      const response = await fetch(`${endPoints.blogs}_page=${pageNum}`);
      const data = await response.json();
      dispatch(getBlogsSuccess(data));
    } catch (error) {
      dispatch(getBlogsfailure());
    }
  };
};
