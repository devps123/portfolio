import {
    GET_BLOGS,
    GET_BLOGS_SUCCESS,
    GET_BLOGS_FAILURE
  } from '../actionsConstants';
  
  // Test Suite for Action Constants
  describe('Action Constants', () => {
    test('should have correct action types', () => {
      expect(GET_BLOGS).toBe("GET_BLOGS");
      expect(GET_BLOGS_SUCCESS).toBe("GET_BLOGS_SUCCESS");
      expect(GET_BLOGS_FAILURE).toBe("GET_BLOGS_FAILURE");
    });
  });
  