import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0); // Added for rating count

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddProduct = async () => {
    const newProduct = {
      title,
      price,
      description,
      category,
      image,
      rating: {
        rate: rating,
        count: ratingCount,
      },
    };
    await fetch("https://tiny-erin-bat-tie.cyclic.app/products", {
      method: "POST",
      body: JSON.stringify(newProduct), // Remove the spread operator
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == true) {
          console.log(data);
          alert(data.msg);
          fetchData(data); // Fetch the updated product list
          closeModal(); // Close the modal
        }
      });
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://tiny-erin-bat-tie.cyclic.app/products"
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 mb-10"
      >
        Add Products
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded shadow-lg p-4 h-full border border-gray-300  hover:border-blue-700"
          >
            <div className="flex flex-col items-center h-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-40 h-40 object-contain mx-auto"
              />
              <h2 className="text-sm font-semibold mt-2 h-20 ">
                {product.title}
              </h2>
              <p className="text-gray-600">${product.price}</p>
              <Link to={`/productdetails/${product._id}`}>
                <button className="bg-blue-500 text-white py-2 px-4 mt-2  hover:bg-blue-700 rounded">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-4 rounded shadow-lg border border-solid border-gray-300">
            <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
            <div className="flex items-center mb-4">
              <label className="w-1/4">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-3/4 border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/4">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-3/4 border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/4">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-3/4 border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/4">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-3/4 border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/4">Rating</label>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-3/4 border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/4">Rating Count</label>
              <input
                type="number"
                value={ratingCount}
                onChange={(e) => setRatingCount(e.target.value)}
                className="w-3/4 border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/4">Image</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-3/4 border border-gray-300 rounded p-2"
              />
            </div>
            <div className="text-right">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mr-4"
                onClick={handleAddProduct}
              >
                Add Product
              </button>
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
