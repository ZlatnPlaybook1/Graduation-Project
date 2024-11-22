import ProductCard from "./ProductCard";
const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "What Do You Meme?",
      price: 33.11,
      rating: 5,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "High-End Gift Wrapping",
      price: 80.12,
      rating: 4,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Pest Control Umbrella",
      price: 11.93,
      rating: 3,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Eye Projectors",
      price: 14.75,
      rating: 4,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 5,
      name: "Giant Pillow Thing",
      price: 75.73,
      rating: 4,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 6,
      name: "Weird Crushes Game",
      price: 15.98,
      rating: 3,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 7,
      name: "Couple's Umbrella",
      price: 75.26,
      rating: 5,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 8,
      name: "Babbage Web Spray",
      price: 49.11,
      rating: 2,
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">We Like to Shop</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
