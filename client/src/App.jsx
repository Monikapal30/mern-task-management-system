import Header from "./components/Header";
import Roles from "./components/RolesList";

function App() {
  const roles = ["Admin", "Project Manager", "Team Member", "Guest", "Viewer"];
  return (
    <div>
      <Header tittle="Smart Task Manager" userName="Rahul" />

      <Roles roles={roles} />
    </div>
  );
}

export default App;
