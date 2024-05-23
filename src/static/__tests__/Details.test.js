import {
    personalDetails,
    socialMediaUrl,
    workDetails,
    eduDetails,
    projectDetails,
    contactDetails
  } from '../Details';
  
  
  // Test Suite for Personal Details
  describe('Personal Details', () => {
    test('should have correct personal details', () => {
      expect(personalDetails).toHaveProperty('name', 'Rahul Singh');
      expect(personalDetails).toHaveProperty('tagline', 'I am a Software Engineer');
      expect(personalDetails).toHaveProperty('about');
      expect(personalDetails.about).toContain('Dynamic JavaScript developer');
    });
  });
  
  // Test Suite for Social Media URLs
  describe('Social Media URLs', () => {
    test('should have correct social media URLs', () => {
      expect(socialMediaUrl).toHaveProperty('linkdein', 'https://www.linkedin.com/in/rahul-singh-savner/');
      expect(socialMediaUrl).toHaveProperty('github', 'https://www.github.com/');
      expect(socialMediaUrl).toHaveProperty('instagram', 'https://www.instagram.com/');
    });
  });
  
  // Test Suite for Work Details
  describe('Work Details', () => {
    test('should have correct work details', () => {
      expect(workDetails).toBeInstanceOf(Array);
      expect(workDetails.length).toBe(4);
      expect(workDetails[0]).toHaveProperty('Position', 'Software Engineer');
      expect(workDetails[0]).toHaveProperty('Company', 'Navis');
      expect(workDetails[0]).toHaveProperty('Location', 'Bengaluru');
      expect(workDetails[0]).toHaveProperty('Type', 'Full Time');
      expect(workDetails[0]).toHaveProperty('Duration', 'Jan-2022 - Present');
    });
  });
  
  // Test Suite for Education Details
  describe('Education Details', () => {
    test('should have correct education details', () => {
      expect(eduDetails).toBeInstanceOf(Array);
      expect(eduDetails.length).toBe(2);
      expect(eduDetails[0]).toHaveProperty('Position', 'B.Tech Graduated in Computer Science');
      expect(eduDetails[0]).toHaveProperty('Company', 'ITM University');
      expect(eduDetails[0]).toHaveProperty('Location', 'Gwalior');
      expect(eduDetails[0]).toHaveProperty('Type', 'Full Time');
      expect(eduDetails[0]).toHaveProperty('Duration', 'July 2015 - Jun-2019');
    });
  });
  
//   // Test Suite for Tech Stack and Tools
//   describe('Tech Stack and Tools', () => {
//     test('should have correct tech stack details', () => {
//       expect(techStackDetails).toHaveProperty('html', '../../assets/techstack/html.png');
//       expect(techStackDetails).toHaveProperty('css', '../../assets/techstack/css.png');
//       expect(techStackDetails).toHaveProperty('js', '../../assets/techstack/js.png');
//       expect(techStackDetails).toHaveProperty('react', '../../assets/techstack/react.png');
//       // Add other tech stack images as needed
//     });
//   });
  
  // Test Suite for Project Details
  describe('Project Details', () => {
    test('should have correct project details', () => {
      expect(projectDetails).toBeInstanceOf(Array);
      expect(projectDetails.length).toBe(6);
      expect(projectDetails[0]).toHaveProperty('title', 'Yard Inventory');
      expect(projectDetails[0]).toHaveProperty('description');
      expect(projectDetails[0]).toHaveProperty('techstack', 'HTML/CSS, JavaScript');
      expect(projectDetails[0]).toHaveProperty('previewLink', 'https://google.com');
      expect(projectDetails[0]).toHaveProperty('githubLink', 'https://github.com');
    });
  });
  
  // Test Suite for Contact Details
  describe('Contact Details', () => {
    test('should have correct contact details', () => {
      expect(contactDetails).toHaveProperty('email', 'rahulsingh.savner9926@gmail.com');
      expect(contactDetails).toHaveProperty('phone', '9926006829');
    });
  });
  