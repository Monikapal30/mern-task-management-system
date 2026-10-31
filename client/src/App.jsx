function App() {
  const roles = ["Admin", "Project Manager", "Team Member", "Guest", "Viewer"];
  return (
    <div>
      <h1>Smart Task Manager</h1>
      <p>manage project in smarter way</p>
      <p>Logged in as : Monika</p>

      <ol>
        {roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
