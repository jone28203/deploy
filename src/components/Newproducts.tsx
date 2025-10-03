import React from "react";
import ProductCard from "./ProductCard";

const productData = [
  {
    img: "/banner1.jpg",
    title: "Jacket",
    desc: "Men Yarn",
    rating: 4,
    price: 45,
  },
  {
    img: "/banner2.jpg",
    title: "Shoes",
    desc: "Running Shoes",
    rating: 5,
    price: 60,
  },
  {
    img: "/banner3.jpg",
    title: "Watch",
    desc: "Luxury Watch",
    rating: 3,
    price: 120,
  },
   {
    img: "/banner1.jpg",
    title: "Jacket",
    desc: "Men Yarn",
    rating: 4,
    price: 45,
  },
  {
    img: "/banner2.jpg",
    title: "Shoes",
    desc: "Running Shoes",
    rating: 5,
    price: 60,
  },
  {
    img: "/banner3.jpg",
    title: "Watch",
    desc: "Luxury Watch",
    rating: 3,
    price: 120,
  },
];

const Newproducts = () => {
  return (
    <div className=" py-10 px-4 md:px-8 lg:px-16">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
        New Products
      </h2>

      {/* Grid layout */}
      <div className="container  mx-auto">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productData.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Newproducts;
