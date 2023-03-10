function Spa(){
  return (
      <HashRouter>
          <NavBar/>
          <UserContext.Provider value={{currentUser:0, users:[{name:'Example User',email:'ExampleUser@e-mail.com',password:'password',balance: 500}]}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/deposit/" exact component={Deposit} />
          <Route path="/withdraw/" exact component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
          </UserContext.Provider>
      </HashRouter>   
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
)