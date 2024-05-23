import { routePathNames, colors, labels } from '../constants';

// Test Suite for Route Path Names
describe('Route Path Names', () => {
  test('should have correct path names', () => {
    expect(routePathNames).toHaveProperty('HOME', '/');
    expect(routePathNames).toHaveProperty('ABOUT', '/about');
    expect(routePathNames).toHaveProperty('TECHNOLOGIES', '/technologies');
    expect(routePathNames).toHaveProperty('PROJECTS', '/projects');
    expect(routePathNames).toHaveProperty('BLOGS', '/blogs');
    expect(routePathNames).toHaveProperty('CONTACT', '/contact');
  });
});

// Test Suite for Colors
describe('Colors', () => {
  test('should have correct color values', () => {
    expect(colors).toHaveProperty('headerLink', '#FF3358');
  });
});

// Test Suite for Labels
describe('Labels', () => {
  test('should have correct label values', () => {
    expect(labels).toHaveProperty('somethingWentWrong', 'Something went wrong!');
    expect(labels).toHaveProperty('footerText', 'Thanking You');
  });
});
