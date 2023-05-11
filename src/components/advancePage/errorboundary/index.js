// -- error boundary concept is the most imp concept in react.  this is very helpful to us when we are build e commerce like application.
import EBoundary from "./Boundary";
import ProductComponent from "./ProductComponent";

const ErrorBoundary = () => {
  const arr = ["Ac", "sofa", "washing machine", "dinning table", "tree"];
  return (
    <>
      <br />
      <h1>Error Boundary concept</h1>
      <h3>
        Error boundaries are react components that catch Javascript error in
        their child component tree, log those errors and display a fallback UI
      </h3>

      <EBoundary>
        <ProductComponent product={arr[0]} />
      </EBoundary>
      <EBoundary>
        <ProductComponent product={arr[1]} />
      </EBoundary>
      <EBoundary>
        <ProductComponent product={arr[2]} />
      </EBoundary>
      <EBoundary>
        <ProductComponent product={arr[3]} />
      </EBoundary>
      {/* <EBoundary>
      <ProductComponent product={arr[4]} />  // if you want to see the error boundary result uncomment this code
      </EBoundary> */}
    </>
  );
};

export default ErrorBoundary;
