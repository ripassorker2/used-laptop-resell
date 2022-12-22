import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  let time = new Date();
  let hour = time.getHours();
  if (hour > 12) {
    hour = hour - 12;
  }

  let minute = time.getMinutes();
  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();

  const handleProduct = (e) => {
    e.preventDefault();
    const productName = e.target.product.value;
    const price = e.target.price.value;
    const useTime = e.target.useTime.value;
    const purchase = e.target.purchase.value;
    const purchesYear = e.target.purchesYear.value;
    const location = e.target.location.value;
    const phone = e.target.phone.value;
    const catagory = e.target.category.value;
    const quality = e.target.quality.value;
    const description = e.target.description.value;

    const image = e.target.productPhoto.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_Imgbb_key}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const productImage = imageData.data.display_url;
        const productInfo = {
          sellerName: user?.displayName,
          sellerEmail: user?.email,
          sellerImg: user?.photoURL,
          phone,
          productName,
          purchesYear,
          price: purchase,
          useTime,
          productImage,
          resalePrice: price,
          location,
          description,
          advertise: false,
          catagory,
          status: "available",
          quality,
          date: `${date}/${month}/${year}`,
          time: `${hour}:${minute}`,
        };

        fetch(`https://resale-laptop-server.vercel.app/products`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("Product Submited successfully");
            navigate("/dashboard/myProduct");
          });
      });
  };
  return (
    <div>
      <section className="p-6   rounded-md shadow-xl my-16 md:w-[80%]  m-auto">
        <h1 className=" md:text-5xl text-3xl text-center font-bold text-purple-800 capitalize">
          Add Product
        </h1>
        <form onSubmit={handleProduct}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-800" htmlFor="name">
                Seller Name
              </label>
              <input
                id="name"
                name="name"
                defaultValue={user?.displayName}
                disabled
                required
                readOnly
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-800" htmlFor="emailAddress">
                Seller Email
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                required
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-800" htmlFor="product">
                Product Name
              </label>
              <input
                id="product"
                type="text"
                name="product"
                required
                placeholder="Product Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-800" htmlFor="price">
                Resale Price
              </label>
              <input
                id="price"
                type="number"
                required
                name="price"
                placeholder="Price"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-800" htmlFor="useTime">
                Used Time
              </label>
              <input
                id="useTime"
                type="text"
                required
                name="useTime"
                placeholder="Used time"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-800" htmlFor="purchase">
                Original Price
              </label>
              <input
                id="purchase"
                type="number"
                required
                name="purchase"
                placeholder="Original price"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-800" htmlFor="useTime">
                Purches Year
              </label>
              <input
                id="year"
                type="date"
                required
                name="purchesYear"
                placeholder="Purches Year"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-800" htmlFor="location">
                Location
              </label>
              <input
                id="location"
                type="text"
                required
                name="location"
                placeholder="Location"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-800" htmlFor="phone">
                Seller Phone Number
              </label>
              <input
                id="phone"
                type="number"
                name="phone"
                required
                placeholder="Seller Phone Number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-800" htmlFor="quality">
                Product Quality
              </label>
              <select
                name="quality"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500  focus:outline-none focus:ring"
              >
                <option selected>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
            <div>
              <label className="text-gray-800" htmlFor="category">
                Category
              </label>
              <select
                name="category"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500  focus:outline-none focus:ring"
              >
                <option>Apple</option>
                <option>Hp</option>
                <option>Lenovo</option>
              </select>
            </div>

            <div>
              <label className="text-gray-800" htmlFor="photo">
                Photo
              </label>
              <input
                id="photo"
                type="file"
                required
                name="productPhoto"
                className="block w-full px-4 py-1.5 mt-2 text-gray-700 bg-white border rounded-md     border-gray-600 focus:border-blue-400   focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div>
            <label className="text-gray-800" htmlFor="passwordConfirmation">
              Description
            </label>
            <textarea
              id="description"
              type="textarea"
              required
              name="description"
              placeholder="Description"
              className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"
            ></textarea>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
