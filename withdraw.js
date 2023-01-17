function Withdraw() {
  const [withdraw, setWithdraw] = React.useState("");
  const [balance, setBalance] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);
  let userBalance = ctx.users[ctx.users.length - 1].balance;
  let userName = ctx.users[ctx.users.length - 1].name;

  function validate(number) {
      if (isNaN(number) || number < 0) {
        setStatus("Transaction Failed.");
        setTimeout(() => setStatus(""), 6000);
        return false;
      }
      return true;
    }
  

  function overdraw(number) {
  if (Number(number) > userBalance) {
      setStatus(
      "Transaction Failed. Withdrawal amount cannot exceed current funds balance."
      );
      clearForm();
      return false;
  }
return true;
}

function handleWithdraw (amount) {
  if (!validate(amount) || !overdraw(amount)) return;
  setBalance(userBalance - amount);
  setStatus("");
ctx.users[ctx.users.length - 1].balance -= Number(amount);
setShow(false);
}

function clearForm() {
  setWithdraw("");
  setShow(true);
}

  return (
      <Card
      bgcolor="danger"
      header="Withdraw Funds"
      status={status}
      body={show ? (
         <>
         <h5>Welcome, {userName}!</h5>
         <br/>
         <h4>Your Current Balance is: $ {userBalance}</h4>
         <br/>
         <div>
              <input type="input" className="form-control" id="number" placeholder="Enter Withdrawal Amount" value={withdraw} onChange={(e) => setWithdraw(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light"  disabled={withdraw === ""}
            onClick={() => handleWithdraw(withdraw)}>Withdraw Funds</button>
          </div>
          </>
      ):(
          <>
          <h5>Successful!</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Complete Another Withdrawal</button>
          </>
      )
  }
  />
   );
}