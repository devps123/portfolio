import { endPoints } from '../apiEndPoints';

// Test Suite for Endpoints
describe('Endpoints', () => {
  test('should have correct blog endpoint with limit parameter', () => {
    expect(endPoints.blogs).toBe("https://jsonplaceholder.typicode.com/posts?_limit=10&");
  });
});
