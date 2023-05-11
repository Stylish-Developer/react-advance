// -- a product component

const ProductComponent = ({ product }) => {
  if (product === "tree") {
    throw new Error(` ${product} is not a product`);
  }
  return (
    <>
      <div
        style={{
          border: "1px solid #ccc red",
          minHeight: "200px",
          width: "100%",
          backgroundColor: "lightgreen",
          padding: "10px",
        }}
      >
        <h2>ProductComponent</h2>;
        <div>
          <h1>Product: {product}</h1>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
