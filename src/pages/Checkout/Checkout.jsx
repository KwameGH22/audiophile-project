import React, { useState } from "react";
import { Link } from "react-router-dom";
import shape from "../../../public/resources/assets/shared/desktop/shape.svg";
import Modal from "../../components/Modal/Modal";
import { useCart } from "../../components/CartContext/CartContext";

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const { cartProducts, getTotalCost } = useCart();

  const shipping = getTotalCost() * 0.005;
  const vat = getTotalCost() * 0.15;
  const grandTotal = getTotalCost() + vat + shipping;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  // console.log(formData)

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      const { name, type, checked, value } = event.target;
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section className="checkoutContainer bg-[#FAFAFA] pb-[40px]">
      <Link to="/">
        <h3 className="checkoutBack no-underline text-[#000] w-[200px] text-[15px] font-normal leading-[25px] opacity-50 ml-[12px] p-[15px]">Go back</h3>
      </Link>
      {/* Form starts here */}
      <form
        action=""
        className="formContainer mx-[auto] my-[0] h-auto rounded-[8px] bg-[#FFF] w-[90%] p-[15px] mt-[8px]"
        onSubmit={handleSubmit}
        id="checkoutForm"
      >
        <h1 className="text-[28px] font-bold tracking-[1px] mb-[20px]">Checkout</h1>
        {/* BILLING DETAILS */}
        <legend className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.929px] mb-[15px]">BILLING DETAILS</legend>

        <div className="billingDetails lg:grid lg:grid-cols-[50%_45%] lg:gap-x-[20px]">
          <div>
            <label className="block mb-[10px] text-[12px] font-bold tracking-[-0.21px]" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="fullName"
              onChange={handleChange}
              value={formData.fullName}
              className="mb-[30px] block w-[280px] h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[14px] font-bold tracking-[-0.25px] [text-indent:10px]"
            />
          </div>
          <div>
            <label className="block mb-[10px] text-[12px] font-bold tracking-[-0.21px]" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="mb-[30px] block w-[280px] h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[14px] font-bold tracking-[-0.25px] [text-indent:10px]"
            />
          </div>
          <div>
            <label className="block mb-[10px] text-[12px] font-bold tracking-[-0.21px]" htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
              value={formData.phoneNumber}
              className="mb-[30px] block w-[280px] h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[14px] font-bold tracking-[-0.25px] [text-indent:10px]"
            />
          </div>
        </div>

        <legend className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.929px] mb-[15px]">SHIPPING INFO</legend>
        {/* SHIPPING DETAILS */}
        <div className="shippingInfo lg:grid lg:grid-cols-[50%_45%] lg:gap-x-[20px] lg:grid-rows-[50%_50%]">
          <div>
            <label className="block mb-[10px] text-[12px] font-bold tracking-[-0.21px]" htmlFor="address">Your Address</label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={handleChange}
              value={formData.address}
              className="mb-[30px] block w-[280px] h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[14px] font-bold tracking-[-0.25px] [text-indent:10px] lg:w-[193%]"
            />
          </div>
          <div className="zipCode lg:row-[2] lg:col-[2] ">
            <label className="block mb-[10px] text-[12px] font-bold tracking-[-0.21px]" htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              onChange={handleChange}
              value={formData.zipCode}
              className="mb-[30px] block w-[280px] h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[14px] font-bold tracking-[-0.25px] [text-indent:10px]"
            />
          </div>
          <div className="city lg:col-[1]">
            <label className="block mb-[10px] text-[12px] font-bold tracking-[-0.21px]" htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={handleChange}
              value={formData.city}
              className="mb-[30px] block w-[280px] h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[14px] font-bold tracking-[-0.25px] [text-indent:10px]"
            />
          </div>
        </div>

        <label className="block mb-[10px] text-[12px] font-bold tracking-[-0.21px]" htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="United States"
          onChange={handleChange}
          value={formData.country}
          className="mb-[30px] block w-[280px] h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[14px] font-bold tracking-[-0.25px] [text-indent:10px] lg:w-1/2"
        />

        <legend className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.929px] mb-[15px]">PAYMENT DETAILS</legend>
        <div className="paymentMethod lg:grid lg;grid-cols-[50%_40%] lg:gap-x-[7%] lg:items-center lg:mb-[40px]">
          <legend className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.929px] mb-[15px] lg:-mt-[80px] lg:text-[#000]">Payment Method</legend>

          <div className="paymentOptions">
            <div className="eMoney lg:inline-block lg:ml-[20px] lg:mt-[11px] ">
              <input
                type="radio"
                id="eMoney"
                name="paymentMethod"
                onChange={handleChange}
                value="e-Money"
                checked={formData.paymentMethod === "e-Money"}
                className="mb-[30px] accent-[#D87D4A] h-full mt-[10px] ml-[20px]"
              />
              <label className="inline-block ml-[20px] lg:inline-block lg:ml-[20px] lg:mt-[11px]" htmlFor="eMoney">e-Money</label>
            </div>
            <br />
            <div className="cod inline-block ml-[20px] lg:flex lg:h-[50px] lg:items-center lg:rounded-[8px] lg:bg-[#FFF] lg:border-[1px] lg:border-[solid] lg:border-[#CFCFCF]">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                onChange={handleChange}
                value="Cash on Delivery"
                checked={formData.paymentMethod === "Cash on Delivery"}
                className="mb-[30px]  accent-[#D87D4A] h-full mt-[10px] ml-[20px]"
              />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
          </div>
          <br />
        </div>

        <div className="accounts lg:hidden">
          <div>
            <label className="inline-block ml-[20px]" htmlFor="eMoneyNumber">e-Money Number</label>
            <input
              type="number"
              id="eMoneyNumber"
              name="eMoneyNumber"
              onChange={handleChange}
              value={formData.eMoneyNumber}
              className="mb-[30px] block w-[280px] h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[14px] font-bold tracking-[-0.25px] [text-indent:10px]"
              
            />
          </div>
          <div>
            <label htmlFor="eMoneyPin">e-Money PIN</label>
            <input
              type="number"
              id="eMoneyPin"
              name="eMoneyPin"
              onChange={handleChange}
              value={formData.eMoneyPin}
              className="mb-[30px] focus:none block w-[280px] h-[56px] rounded-[8px] border-[1px] border-[solid] border-[#CFCFCF] bg-[#FFF] text-[14px] font-bold tracking-[-0.25px] [text-indent:10px]"
            />
          </div>
        </div>

        <div className="checkoutPara hidden ">
          <img src={shape} alt="" />
          <p>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      </form>
      {/* Form ends here */}
      <div className="summaryContainer w-[90%] h-auto bg-[#FFF] mt-[30px] rounded-[8px] p-[20px]  lg:rounded-[8px] lg:min-w-[21%] lg:h-[500px] lg:mt-[40px] lg:bg-[#fff] lg:p-[40px] lg:overflow-auto">
        <h2 className="text-[18px] font-bold tracking-[1.2px] mb-[15px] lg:text-[18px] lg:font-bold lg:tracking-[1.2px] lg:mb-[15px] " id="summary">Summary</h2>
        {cartProducts.map((cartProduct) => (
          <div className="summaryTop flex justify-between items-center mb-[20px]">
            <img src={cartProduct.categoryImage.mobile} alt="" width={100} />
            <div>
              <h4 className="w-[100px] text-[15px] font-bold leading-[25px]">{cartProduct.name}</h4>
              <h4 className="-ml-[20%] text-[14px] font-bold leading-[25px] opacity-50">${cartProduct.price}</h4>
            </div>
            <h4>x{cartProduct.quantity}</h4>
          </div>
        ))}
        <div className="summaryBottom">
          <div className="flex justify-between mt-[20px]">
            <h3 className="flex justify-between mt-[10px] text-[15px] font-normal leading-[25px] opacity-50">TOTAL</h3>
            <h3 className="text-[18px] font-bold uppercase">${getTotalCost().toLocaleString()}</h3>
          </div>
          <div className="flex justify-between mt-[20px]">
            <h3 className="flex justify-between mt-[10px] text-[15px] font-normal leading-[25px] opacity-50">SHIPPING</h3>
            <h3 className="text-[18px] font-bold uppercase">${shipping.toFixed(2)}</h3>
          </div>
          <div className="flex justify-between mt-[20px]">
            <h3 className="flex justify-between mt-[10px] text-[15px] font-normal leading-[25px] opacity-50">VAT (INCLUDED)</h3>
            <h3 className="text-[18px] font-bold uppercase">${vat.toLocaleString()}</h3>
          </div>
          <div className="flex justify-between mt-[20px]">
            <h3 className="flex justify-between mt-[10px] text-[15px]  font-normal leading-[25px] opacity-50">GRAND TOTAL</h3>
            <h3 className="text-[18px] font-bold uppercase text-[#D87D4A]">${grandTotal.toLocaleString()}</h3>
          </div>
        </div>
        <div className="formBtn mx-[auto] my-[0] w-[279px] h-[48px] mt-[30px] lg:w-full" onClick={toggleModal}>
          {isModalOpen && <div className="modalOverlay fixed top-[0] left-[0] w-full h-full bg-[rgba(0,_0,_0,_0.5)] justify-center items-center"></div>}
          <button className="border-[none] h-full w-full bg-[#D87D4A] text-[#FFF] font-bold text-[13px] tracking-[1px] lg:hover:bg-[#FBAF85] lg:hover:cursor-pointer" type="submit" form="checkoutForm">
            CONTINUE & PAY
          </button>
          <div className={`modalOpen absolute bg-[#fff] rounded-[8px] top-full left-[7%] w-[85%] ${isModalOpen ? "show" : ""}`}>
            {isModalOpen && <Modal />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
