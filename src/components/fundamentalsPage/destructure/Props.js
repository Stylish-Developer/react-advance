// -- props destructing

const PropsDestructuring = (props) => {
  // ({ today, name, welcomeMsg  } )params level destructuring
  const { today, name, welcomeMsg } = props; //ES6 destructuring

  return (
    <>
      <h3>props destructuring in functional component</h3>
      <h2>{name}</h2>
      <p>{welcomeMsg}</p>
      <h2>Today : {today}</h2>
    </>
  );
};

export default PropsDestructuring;
