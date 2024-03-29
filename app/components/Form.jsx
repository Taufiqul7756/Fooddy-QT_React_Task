import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowRightLong } from "react-icons/fa6";

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    onSubmit(data);
    alert("Form submitted successfully!");
  };
  return (
    <div className=" p-10">
      <form className="grid py-2" onSubmit={handleSubmit(submitForm)}>
        <div className="mb-10">
          {/* Products Name */}
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Product Name
            </label>
            <input
              type="text"
              className=" bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Product Name"
              {...register("productName", { required: true })}
            />
          </div>
          {/* Price */}
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Price
            </label>
            <input
              type="number"
              className=" bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Price"
              {...register("Price", {})}
            />
          </div>

          {/* URL */}
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Image URL
            </label>
            <input
              type="url"
              className=" bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Image URL"
              {...register("imageURL", { required: true })}
            />
          </div>

          <div className="flex">
            {/* isPopular */}
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                isPopular
              </label>
              <select
                className=" bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-white"
                {...register("isPopular", { required: true })}
              >
                <option value="True">True</option>
                <option value="False">False</option>
              </select>
            </div>

            {/* isRecommended */}
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                isRecommended
              </label>
              <select
                className=" bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-6 mb-3 leading-tight focus:outline-none focus:bg-white"
                {...register("isRecommended", { required: true })}
              >
                <option value="True">True</option>
                <option value="False">False</option>
              </select>
            </div>
          </div>
        </div>

        <input
          className="bg-[#ff9c1c] hover:bg-[#eb6750] border py-2 font-bold text-white rounded-lg cursor-pointer"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Form;
