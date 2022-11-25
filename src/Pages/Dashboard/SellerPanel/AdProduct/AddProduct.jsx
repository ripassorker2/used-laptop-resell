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
          price,
          useTime,
          productImage,
          resalePrice: purchase,
          location,
          description,
          catagory,
          quality,
          date: `${date}/${month}/${year}`,
          time: `${hour}:${minute}`,
        };
        console.log(productInfo);
        fetch(`http://localhost:5000/products`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Product Submited successfully");
            navigate("/");
          });
      });
  };
  return (
    <div>
      <section class="p-6  bg-base-100 rounded-md shadow-xl my-16 md:w-[80%]  m-auto">
        <h1 class=" md:text-5xl text-3xl text-center font-bold text-purple-800 capitalize">
          Add Product
        </h1>
        <form onSubmit={handleProduct}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-800" for="name">
                Seller Name
              </label>
              <input
                id="name"
                name="name"
                defaultValue={user?.displayName}
                disabled
                readOnly
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-800" for="emailAddress">
                Seller Email
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                readOnly
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-800" for="product">
                Product Name
              </label>
              <input
                id="product"
                type="text"
                name="product"
                placeholder="Product Name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-800" for="price">
                Resale Price
              </label>
              <input
                id="price"
                type="number"
                name="price"
                placeholder="Price"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-800" for="useTime">
                Used Time
              </label>
              <input
                id="useTime"
                type="text"
                name="useTime"
                placeholder="Used time"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-gray-800" for="purchase">
                Original Price
              </label>
              <input
                id="purchase"
                type="number"
                name="purchase"
                placeholder="Original price"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-800" for="useTime">
                Purches Year
              </label>
              <input
                id="year"
                type="date"
                name="purchesYear"
                placeholder="Purches Year"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-800" for="location">
                Location
              </label>
              <input
                id="location"
                type="text"
                name="location"
                placeholder="Location"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-800" for="phone">
                Seller Phone Number
              </label>
              <input
                id="phone"
                type="number"
                name="phone"
                placeholder="Seller Phone Number"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label class="text-gray-800" for="quality">
                Product Quality
              </label>
              <select
                name="quality"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500  focus:outline-none focus:ring"
              >
                <option selected>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
            <div>
              <label class="text-gray-800" for="category">
                Category
              </label>
              <select
                name="category"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500  focus:outline-none focus:ring"
              >
                <option selected>Apple</option>
                <option>Hp</option>
                <option>Dell</option>
                <option>Lenovo</option>
              </select>
            </div>

            <div>
              <label class="text-gray-800" for="photo">
                Photo
              </label>
              <input
                id="photo"
                type="file"
                name="productPhoto"
                class="block w-full px-4 py-1.5 mt-2 text-gray-700 bg-white border rounded-md     border-gray-600 focus:border-blue-400   focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div>
            <label class="text-gray-800" for="passwordConfirmation">
              Description
            </label>
            <textarea
              id="description"
              type="textarea"
              name="description"
              placeholder="Description"
              class="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"
            ></textarea>
          </div>
          <div class="flex justify-center mt-6">
            <button
              type="submit"
              class="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
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
