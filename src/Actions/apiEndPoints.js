/**
 * The base URL for the server API.
 * @type {string}
 */
const serverURL = "https://jsonplaceholder.typicode.com/";

/**
 * Endpoints for the API.
 * 
 * @type {Object}
 * @property {string} blogs - The endpoint for fetching blog posts, limited to 10 per request for data chunking.
 * 
 * @description
 * The `_limit=10` parameter is added to fetch data in chunks. This approach is beneficial for implementing infinite scroll
 * and is considered good practice when retrieving large amounts of data from an API.
 */
export const endPoints = {
    blogs: `${serverURL}posts?_limit=10&`
};
