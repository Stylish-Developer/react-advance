// --> NO match routes page

const Page404 = () => {
  // -- internal style
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <>
      <div style={pageStyle}>
        <h1>404</h1>
        <p>PAGE NOT FOUND</p>
      </div>
    </>
  );
};

export default Page404;
