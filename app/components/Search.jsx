"use client";

// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useForm } from "react-hook-form";

const SearchBar = ({ placeholder }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const searchTerm = watch("searchTerm", "");

  return (
    <div className="">
      {/* <FaMagnifyingGlass className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" /> */}
      <input
        {...register("searchTerm")}
        autoComplete="off"
        type="text"
        placeholder={searchTerm ? searchTerm : placeholder}
        className="pl-8 pr-2 py-2 rounded-xl focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-80"
      />
    </div>
  );
};

export default SearchBar;
