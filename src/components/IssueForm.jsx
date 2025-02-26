// src/components/IssueForm.jsx
import { useState } from 'react';

const IssueForm = ({ onAddIssue }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ctime,setCtime]=useState(0)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onAddIssue({ title, description });
      setTitle('');
      setDescription('');
    }
  };
  const handleTime=()=>{
      let newDate = new Date()
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();
      
     setCtime(`${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <br/>
        <h2>Title:</h2>
        <br/>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
      </div>
      <div>
        <h2>Description:</h2>
          <br/>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value) }
          style={{rows:"5"}}
          />
          <br/>
      </div>
      <div style={{marginTop:"30px"}}>
        <h2>Place & Time : </h2>
          <input type='file' placeholder='Upload Image' onClick={handleTime}/>
          <p>{ctime}</p>
      </div>
      <button type="submit">Add Issue</button>
    </form>
  );
};

export default IssueForm;