import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";

const BuyNowModal = ({ catagoryDetailInfo, setCatagoryDetailInfo }) => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const { productName, resalePrice, productImage } = catagoryDetailInfo;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const buyerName = form.userName.value;
    const buyerPhoto = user?.photoURL;
    const buyeremail = form.email.value;
    const productName = form.productName.value;
    const productPhoto = productImage;
    const resalePrice = form.price.value;
    const phoneNumber = form.phone.value;
    const meetingLocation = form.location.value;

    const buyingInfo = {
      buyerName,
      buyerPhoto,
      buyeremail,
      productName,
      productPhoto,
      resalePrice,
      phoneNumber,
      meetingLocation,
    };
    console.log(buyingInfo);

    fetch("http://localhost:5000/buying", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buyingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Buying suuccesfully.... !!");
          setCatagoryDetailInfo(null);
          navigate("/dashboard/myOrders");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="buy-now-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="buy-now-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit}>
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName}
              disabled
              placeholder="Full Name"
              className="input input-bordered  my-2  w-full "
              required
            />
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              required
              className="input input-bordered  my-2  w-full "
            />
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="productName"
              defaultValue={productName}
              disabled
              placeholder="Email"
              required
              className="input input-bordered  my-2  w-full "
            />
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={resalePrice}
              disabled
              placeholder="Type here"
              className="input input-bordered  my-2  w-full "
            />
            <label className="label">
              <span className="label-text">Your Phone Number</span>
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered  my-2  w-full "
              required
            />
            <label className="label">
              <span className="label-text">Meeting Location</span>
            </label>
            <input
              type="location"
              name="location"
              placeholder="Meeting Location"
              className="input input-bordered  my-2  w-full "
              required
            />

            <button type="submit" className="btn btn-md btn-neutral w-full ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
