import { SigninType } from "@mohit-kumar/common-zod-all";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
const url=import.meta.env.VITE_BACKEND_URL

const Signin = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false); 
  const [postInputs , setPostInputs] = useState<SigninType>({
    password:"",
    email:""
   })

   async function handleRequest(e: React.FormEvent<HTMLFormElement>){
     setLoading(true)
    try{
      e.preventDefault()
      const response=await axios.post(`${url}/api/v1/signin`, postInputs)
      const jwt=response.data.jwt
      const name =response.data.name
      const id=response.data.id
      localStorage.setItem("token",jwt)
      localStorage.setItem("name", name);
      localStorage.setItem("id",id)
       setTimeout(() => {
        setLoading(false); 
        navigate("/blogs");
      }, 1000);
    } catch(error){
      setLoading(false); 
      alert("Something went wrong")
    }
   }

    return (
      <div className="flex h-screen">
           {loading ? (
        <Loader />  
      ) : (
        <>
        <div className="flex flex-col justify-center px-12 w-1/2">
        <div className="border-2 border-gray-700 focus:border-pink-600 w-[450px] shadow-2xl rounded-xl p-8 mx-auto bg-gray-400">
    <h1 className="text-3xl font-bold text-center text-black">Login Into Account</h1>
    <form className="mt-6 space-y-4" onSubmit={handleRequest}>
    <div className="mb-4">
      <label className=" text-lg font-medium text-black">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={postInputs.email}
        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-lg focus:outline-none focus:border-sky-950 text-sky-950"
        onChange={(e)=>{
          setPostInputs({
            ...postInputs,
            email:e.target.value
          })
        }}
      />
    </div>
    <div className="mb-6">
      <label className=" text-lg font-medium text-black">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        value={postInputs.password}
        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-lg focus:outline-none focus:border-sky-950 text-sky-950"
        onChange={(e)=>{
          setPostInputs({
            ...postInputs,
            password:e.target.value
          })
        }}
      />
    </div>
    <button
      type="submit"
      className="w-full py-2 px-3 mt-8 font-bold rounded-md text-white bg-black hover:bg-gray-400 text-lg" >
      Sign In
    </button>
    <p className="mt-2 text-xl font-medium  text-center text-white ">
    Does not have an account? <a href="/signup" className="text-black font-bold hover:underline">Signup</a>
  </p>
  </form>
</div>
</div>
  
        <div className="flex-1 flex justify-center items-center bg-gray-100 w-1/2">
        <div className="flex-1">
        <img
          src="https://wallpapercat.com/w/full/e/4/1/1143047-3840x2160-desktop-4k-robot-background-photo.jpg"
          alt="Blog related"
          className="max-w-full h-auto lg:h-full"
        />
      </div>
        </div>
        </>)}
      </div>
    );
  };
export default Signin;
