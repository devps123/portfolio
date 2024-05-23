import blogsReducer, { initialState } from '../blogsReducer';
import { GET_BLOGS, GET_BLOGS_SUCCESS, GET_BLOGS_FAILURE } from '../../Actions/actionsConstants';

describe('blogsReducer', () => {
  it('should return the initial state when an unknown action is dispatched', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = blogsReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  it('should handle GET_BLOGS action', () => {
    const action = { type: GET_BLOGS };
    const expectedState = { ...initialState, loading: true };
    const newState = blogsReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  it('should handle GET_BLOGS_SUCCESS action', () => {
    const blogs = [{ id: 1, title: 'First Blog' }, { id: 2, title: 'Second Blog' }];
    const action = { type: GET_BLOGS_SUCCESS, payload: blogs };
    const expectedState = { ...initialState, myBlogs: blogs, loading: false };
    const newState = blogsReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  it('should handle GET_BLOGS_SUCCESS action with existing blogs', () => {
    const initialStateWithBlogs = {
      ...initialState,
      myBlogs: [{ id: 1, title: 'First Blog' }],
    };
    const newBlogs = [{ id: 2, title: 'Second Blog' }];
    const action = { type: GET_BLOGS_SUCCESS, payload: newBlogs };
    const expectedState = { ...initialStateWithBlogs, myBlogs: [...initialStateWithBlogs.myBlogs, ...newBlogs], loading: false };
    const newState = blogsReducer(initialStateWithBlogs, action);
    expect(newState).toEqual(expectedState);
  });

  it('should handle GET_BLOGS_FAILURE action', () => {
    const action = { type: GET_BLOGS_FAILURE };
    const expectedState = { ...initialState, loading: false, hasErrors: true };
    const newState = blogsReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
});
