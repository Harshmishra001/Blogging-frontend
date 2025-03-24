import { SignupType } from "@mohit-kumar/common-zod-all";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
const url=import.meta.env.VITE_BACKEND_URL

const Signup = () => {
     const navigate = useNavigate() 
     const [loading, setLoading] = useState(false); 
     const [postInputs , setPostInputs] = useState<SignupType>({
      name:"",
      password:"",
      email:""
     })

     async function handleRequest(e: React.FormEvent<HTMLFormElement>){
      setLoading(true)
      try{
        e.preventDefault()
        const response=await axios.post(`${url}/api/v1/signup`, postInputs)
        const jwt=response.data.jwt
        const name=response.data.name
        const id=response.data.id
        localStorage.setItem("token",jwt)
        localStorage.setItem("name",name)
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
        <div className="border-2 border-gray-700 focus:border-pink-600 w-[450px] shadow-2xl rounded-xl p-8 mx-auto  bg-gray-400">
  <h1 className="text-3xl font-bold text-center text-black">𝕮𝖗𝖊𝖆𝖙𝖊 𝖆𝖓 𝖆𝖈𝖈𝖔𝖚𝖓𝖙</h1>
  <form className="mt-6 space-y-4" onSubmit={handleRequest}>
    <div className="mb-4">
      <label className="block text-lg font-medium text-black">𝖀𝖘𝖊𝖗𝖓𝖆𝖒𝖊</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        value={postInputs.name}
        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-lg focus:outline-none focus:border-sky-950 text-sky-950"
        onChange={(e)=>{
          setPostInputs({
            ...postInputs,
            name:e.target.value
          })
        }}
/>
    </div>
    <div className="mb-4">
      <label className=" text-lg font-medium text-black">𝕰𝖒𝖆𝖎𝖑</label>
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
      <label className=" text-lg font-medium text-black">𝕻𝖆𝖘𝖘𝖜𝖔𝖗𝖉</label>
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
      className="w-full py-2 px-3 mt-8 font-bold rounded-md  text-slate-50 bg-black hover:bg-gray-500 text-lg" >
      Sign Up
    </button>
    <p className="mt-2 text-xl font-medium  text-center text-white">
    Already have an account? <a href="/signin" className="text-black font-bold hover:underline">𝕊𝕚𝕘𝕟𝕚𝕟</a>
  </p>
  </form>
</div>
</div>
  
        <div className="flex-1 flex justify-center items-center bg-white w-1/2">
        <div className="flex-1">
        <img
          src="https://krystianscience.com/wp-content/uploads/2015/06/robot-1024x5761.jpg?w=300&h=259"
          alt="Blog related"
          className="max-w-full h-auto lg:h-full"
        />
      </div>
        </div>
        </>)}
      </div>
    );
  };
export default Signup;

