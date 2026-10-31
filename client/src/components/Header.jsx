function Header({ tittle, userName }) {
  return (
    <header>
      <h1>{tittle}</h1>

      <p>Manage projects in smarter way</p>
      <p>Logged in as : {userName}</p>
    </header>
  );
}

export default Header;
