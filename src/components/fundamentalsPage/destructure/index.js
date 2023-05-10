// --> Destructuring concept component

import ClsPropsDestructuring from "./State";
import PropsDestructuring from "./Props";

const Destructuring = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const currentDate = day + "-" + month + "-" + year;

  return (
    <>
      <p>Destructuring concept </p>
      <PropsDestructuring
        name="Gowtham"
        welcomeMsg="Welcome Chief"
        today={currentDate}
      />
      <ClsPropsDestructuring
        name="Jin"
        welcomeMsg="Welcome"
        today={currentDate}
      />
    </>
  );
};

export default Destructuring;
