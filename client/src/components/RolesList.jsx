function RolesList({ roles }) {
  return (
    <ol>
      {roles.map((role) => (
        <li key={role}>{role}</li>
      ))}
    </ol>
  );
}

export default RolesList;
