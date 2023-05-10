// --> fundamental concepts page

import ClsComponent from "./ClsComponent";
import FnComponent from "./FnComponent";
import BasicFormHandling from "./basicform";
import EventBinding from "./bindingEvents";
import ConditionalRendering from "./conditionalrendering";
import Destructuring from "./destructure";
import WithJSX from "./jsx/WithJsx";
import WithoutJsx from "./jsx/WithoutJsx";
import LifeCycle from "./lifecyclemethod";
import ListRendering from "./listrendering";
import MethodAsProps from "./methodasprops";
import Props from "./props";
import SetState from "./setstate";
import StateComponent from "./state";

const FundamentalPage = () => {
  return (
    <>
      <div style={{ padding: "5px" }}>
        <h1>This is fundamental concepts page</h1>
        <hr />
        <FnComponent />
        <ClsComponent />
        <br />
        <WithJSX />
        <WithoutJsx />
        <br />
        <Props />
        <StateComponent />
        <SetState />
        <br />
        <Destructuring />
        <br />
        <EventBinding />
        <br />
        <MethodAsProps />
        <br />
        <ConditionalRendering />
        <br />
        <ListRendering />
        <br />
        <BasicFormHandling />
        <br/>
        <LifeCycle />
      </div>
    </>
  );
};

export default FundamentalPage;
