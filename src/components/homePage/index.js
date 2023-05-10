// --> homepage of this application

const Home = () => {
  const styles = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
  };
  return (
    <>
      <div style={styles}>
        <h1>Welcome to home page</h1>
      </div>
    </>
  );
};

export default Home;
