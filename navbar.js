function NavBar(){
  return (
<nav className="navbar navbar-expand-lg navbar bg-muted" data-bs-theme="muted">
  <a className="navbar-brand" href="#">Bad Bank, Inc. Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <NavLink to="/CreateAccount/" className="nav-link">Create an Account</NavLink>
              <NavLink to="/deposit/" className="nav-link">Deposit Funds</NavLink>
              <NavLink to="/withdraw/" className="nav-link">Withdraw Funds</NavLink>
              <NavLink to="/AllData/" className="nav-link">Account Data</NavLink>
          </ul>
  </div>   
</nav>
  );
}
