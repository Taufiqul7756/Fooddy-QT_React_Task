import React from "react";

const LoginPage = () => {
  return <div>LoginPage</div>;
};

export default LoginPage;

// import React from "react";
// import { useForm } from "react-hook-form";

// const LoginPage = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     console.log("Login data:", data);
//   };

//   return (
//     <div className="container mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-600">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             {...register("email", { required: true })}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-600">
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             {...register("password", { required: true })}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
