import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const getData = async () => {
    await fetch(`https://tiny-erin-bat-tie.cyclic.app/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details: ", error)
      );
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleSave = async () => {
    const updatedProduct = {
      title: title || product.title,
      price: +price || +product.price,
      description: description || product.description,
      category: category || product.category,
      image: image || product.image,
    };

    // Make a PUT request to update the product in your local API
    await fetch(`https://tiny-erin-bat-tie.cyclic.app/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
      })
      .then((data) => {
        console.log("Product updated successfully", data);
        getData();
        setIsEditModalOpen(false);
        alert(data.msg);
      })
      .catch((error) => {
        console.error("Error updating product: ", error);
      });
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const HandleDelete = async () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmation) {
      await fetch(`https://tiny-erin-bat-tie.cyclic.app/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`HTTP Error! Status: ${response.status}`);
          }
        })
        .then((data) => {
          console.log("Product deleted successfully", data);
          alert(data.msg);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error updating product: ", error);
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container lg:w-1/2 mx-auto mt-10 border border-solid border-blue-300">
      {product ? (
        <div className="bg-white rounded shadow-lg p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full lg:w-60 h-60 object-contain mx-auto"
          />
          <h2 className="text-2xl lg:text-3xl font-semibold mt-4 text-center">
            {product.title}
          </h2>
          <p className="text-2xl font-semibold mt-4 text-gray-600 text-center">
            ${product.price}
          </p>
          <p className="text-lg text-gray-700 mt-4">{product.description}</p>
          <p className="text-lg text-gray-700 mt-4">
            Category: {product.category}
          </p>

          {product.rating ? (
            <p className="text-gray-700 mt-4">
              Rating: {product.rating.rate} (based on {product.rating.count}{" "}
              reviews)
            </p>
          ) : null}

          <button
            className="bg-blue-500 text-white py-2 px-4 mt-4 rounded mr-4"
            onClick={handleEdit}
          >
            Edit
          </button>

          <button
            className="bg-red-500 text-white py-2 px-4 mt-4 rounded"
            onClick={() => HandleDelete(product.id)}
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <img
            src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-11-849_512.gif"
            alt=""
          />
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white w-full lg:w-96 p-4 rounded shadow-lg border border-solid border-gray-300">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
              Edit Product
            </h2>
            <div className="flex items-center mb-4">
              <label className="w-1/4 lg:w-1/5">Image</label>
              <input
                type="text"
                onChange={(e) => setImage(e.target.value)}
                className="w-3/4 lg:w-4/5 border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/4 lg:w-1/5">Title</label>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                className="w-3/4 lg:w-4/5 border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/4 lg:w-1/5">Description</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="w-3/4 lg:w-4/5 border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/4 lg:w-1/5">Price</label>
              <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                className="w-3/4 lg:w-4/5 border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/4 lg:w-1/5">Category</label>
              <input
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                className="w-3/4 lg:w-4/5 border border-gray-300 rounded p-2"
              />
            </div>
            <div className="text-right">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mr-4"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                onClick={handleCloseEditModal}
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
