// src/components/IssueList.jsx
const IssueList = ({ issues }) => {
    return (
      <ul>
        {issues.map((issue, index) => (
          <li key={index} className="issuesLi">
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IssueList;