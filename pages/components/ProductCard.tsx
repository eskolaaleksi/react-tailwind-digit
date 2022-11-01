function Product({
  product: { title, price, description, category, image },
}: any) {
  return (
    <div className="">
      <div className="flex">
        <div className="w-1/3">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="bg-contain bg-no-repeat bg-center w-full h-full"
          ></div>
        </div>
        <div className="">
          <h1 className="">{title.substr(0, 50)}</h1>
          <h3 className="">{category}</h3>
          <p className="">{price}$</p>
          <div className="">{description.substr(0, 100)}</div>
        </div>
      </div>
    </div>
  );
}
export default Product;
