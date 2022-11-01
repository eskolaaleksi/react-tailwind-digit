function Product({
  product: { title, price, description, category, image },
}: any) {
  return (
    <div className="flex flex-wrap w-full p-2 sm:w-1/2 md:w-1/3 xl:w-1/4">
      <div className="flex bg-white w-full rounded-lg dark:bg-gray-300 hover:shadow-2xl transition-shadow duration-300">
        <div className="w-1/3 overflow-hidden dark:bg-white">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="bg-contain bg-no-repeat bg-center w-full h-full duration-300 hover:transform hover:scale-125"
          ></div>
        </div>
        <div className="w-2/3 p-5 overflow-hidden">
          <h1 className="md:text-2xl">{title.substr(0, 50)}</h1>
          <h3 className="text-blue dark:text-gray-700">{category}</h3>
          <p className="text-blue-shock mt-4 text-xl md:text-4xl">{price}$</p>
          <div className="mt-4">{description.substr(0, 100)}</div>
        </div>
      </div>
    </div>
  );
}
export default Product;
