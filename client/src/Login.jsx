function Login() {
  const roles = ["Admin", "Project Manager", "Team Member", "Guest"];

  return (
    <div>
      {roles.map((role) => (
        <p key={role}>{role}</p>
      ))}
    </div>
  );
}

export default Login;
