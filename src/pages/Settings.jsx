// src/pages/Settings.jsx
const Settings = () => {
    return (
      <div className="settings-page">
        <h1>Settings</h1>
        <form>
          <label>Change Password</label>
          <input type="password" placeholder="New Password" required />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  };
  
  export default Settings;