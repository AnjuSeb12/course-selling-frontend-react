import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";


const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);
  return (
    <div className='flex justify-center h-screen items-center '>
        <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col shadow-md gap-y-4  bg-black md:w-1/2 lg:w-1/3 xl:w-1/5 mx-auto p-6'
    >
      <input
        {...register("firstName")}
        placeholder="first name"
        classname="px-3 py-1 rounded-md border text-green-600  "
      />
      {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName.message}</p>}
      <input
        {...register("lastName")}
        placeholder="last name"
        classname="px-3 py-1 rounded-md border placeholder-green-500"
      />
      {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName.message}</p>}
      <input
        {...register("email")}
        placeholder="email"
        classname="px-1.5 py-1 rounded-md border text-green-600  "
      />
      {errors.email && <p className='text-red-800 text-sm'>{errors.email.message}</p>}
      <input
        {...register("password")}
        placeholder="password"
        type="password"
        classname="px-1.5 py-1 rounded-md border text-green-600  "
      />
      {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
      <input type="submit" className='rounded-md text-white bg-blue-500 hover:bg-blue-400 px-2'/>
      <p className="text-white">
        User already exist{" "}
        <Link to="/user/signin" className="text-blue-500 underline">
          Signin
        </Link>
      </p>
    </form>

    </div>
  
  );
}

