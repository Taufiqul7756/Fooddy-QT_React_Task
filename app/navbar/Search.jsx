"use client";

// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useForm } from "react-hook-form";

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex items-center">
      <input
        {...register("searchTerm")}
        autoComplete="off"
        type="text"
        placeholder="Search"
        className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-80"
      />
      <button className="bg-slate-700 hover:opacity-80 text-white p-2 rounded-r-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
