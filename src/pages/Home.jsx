// src/pages/Home.jsx
import { useState } from 'react';
import IssueForm from '../components/IssueForm';
import IssueList from '../components/IssueList';

const Home = () => {
  // Sample issues array
  const sampleIssues = [
    { title: 'Login Page Not Working', description: 'Users cannot log in to the application.' },
    { title: 'Broken Link on Homepage', description: 'The "Contact Us" link redirects to a 404 page.' },
    { title: 'Slow Loading Times', description: 'The dashboard takes more than 10 seconds to load.' },
    { title: 'Missing Images', description: 'Some product images are not displayed on the catalog page.' },
    { title: 'Incorrect Pricing', description: 'The price shown on the product page does not match the cart.' },
    { title: 'Unable to Reset Password', description: 'The "Forgot Password" feature is not working.' },
    { title: 'Mobile Responsiveness Issue', description: 'The website layout breaks on mobile devices.' },
    { title: 'Checkout Error', description: 'Users cannot proceed to payment during checkout.' },
    { title: 'Broken Search Functionality', description: 'The search bar does not return any results.' },
    { title: 'Missing Translation', description: 'Some text is not translated into French.' },
  ];

  const [issues, setIssues] = useState(sampleIssues);

  const addIssue = (newIssue) => {
    setIssues([...issues, newIssue]);
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Issue Tracker</h1>
      <IssueForm onAddIssue={addIssue} />
      <IssueList issues={issues} />
    </div>
  );
};

export default Home;