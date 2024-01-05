"use client";

// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex items-center relative">
      <FaMagnifyingGlass className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
      <input
        {...register("searchTerm")}
        autoComplete="off"
        type="text"
        placeholder="Search"
        className="pl-8 pr-2 py-2 border rounded focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-80"
      />
    </div>
  );
};

export default SearchBar;
