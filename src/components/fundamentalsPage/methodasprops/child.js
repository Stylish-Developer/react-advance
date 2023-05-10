// -- child component for method as props concept

const Child = ({ handleCountIncrement, handleReceiveParamsFromChild }) => {
  return (
    <>
      <h4>child component for receiving method as a prop</h4>
      <button onClick={handleCountIncrement}>➕</button>&nbsp;
      <button
        onClick={() =>
          handleReceiveParamsFromChild("✨ Have a great day 🥂 🎇")
        }
      >
        click to open envelope🧧
      </button>
    </>
  );
};

export default Child;
