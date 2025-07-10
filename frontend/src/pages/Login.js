import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import summaryApi from "../common";
import { toast } from "react-toastify"
import Context from "../context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const {fetchUserDetails} = useContext(Context)


  const handleChange = (e) => {
    const {name, value} = e.target;

    setData((preve)=> {
      return{
        ...preve,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(summaryApi.signIn.url,{
      method: summaryApi.signIn.method,
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(data),
      credentials: "include",
    })

    const dataApi = await dataResponse.json()

    if(dataApi.success){
      toast.success(dataApi.message)
      navigate("/")
      fetchUserDetails()
    }

    if(dataApi.error){
      toast.error(dataApi.message)
    }
  }

  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto ">
          <div className="w-24 h-24 mx-auto border border-red-800 rounded-full overflow-hidden relative">
            <img src={loginIcons} alt="login icons" className=""/>
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-red-600"
              >
                Forgot password ?
              </Link>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 ">
              Login
            </button>
          </form>

          <p className="my-5">
            Don't have account ?{" "}
            <Link
              to={"/sign-up"}
              className="text-red-600 hover:text-red-700 hover:underline"
            >
              Sign-up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
