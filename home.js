function Home() {
  return (
      <Card
      bgcolor="danger"
      header="Welcom to Bad Bank, Inc."
      title="Welcome, Bad Bank, Inc. Member!"
      text="Select the links above to access your account."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />
  );
}