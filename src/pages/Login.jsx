import Lottie from "lottie-react";
import { useContext } from "react";
import { BiEnvelope, BiKey } from "react-icons/bi";
import Social from "../components/Social";
import Title from "../components/Title";
import { AuthContext } from "../providers/AuthProvider";

import { Link, useLocation, useNavigate } from "react-router";
import loginAnimation from "../assets/loginAnimation.json";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();
  console.log(location.pathname);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    signIn(email, pass)
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" bg-[url(/bg.png)] bg-contain ">
      <div className=" bg-white bg-opacity-90 min-h-screen">
        <div className="w-11/12 mx-auto py-10 m-5 p-5  ">
          <div className="title mt-5">
            <Title>Login Now</Title>
          </div>

          <div className="flex  justify-between items-center gap-5 pt-8">
            <div className="login-for flex-1">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-5 flex flex-col gap-8 backdrop-blur-sm bg-opacity-10 shadow-lg rounded-lg"
              >
                <div className="flex justify-start items-center">
                  <div className="">
                    <BiEnvelope className="text-3xl text-slate-500"></BiEnvelope>
                  </div>
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                    type="email"
                    name="email"
                    placeholder="enter email"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-start items-center">
                    <div className="">
                      <BiKey className="text-3xl text-slate-500"></BiKey>
                    </div>
                    <input
                      className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                      type="password"
                      name="pass"
                      placeholder="enter Password"
                    />
                  </div>
                </div>

                <input
                  type="submit"
                  value="Login Now"
                  className="btn cursor-pointer"
                />
                <p>
                  Don't have an account?{" "}
                  <Link className="text-red-600 underline" to="/registration">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
            <Social></Social>
            <div className="lottie  flex-1 mx-20">
              <Lottie animationData={loginAnimation} loop={true}></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
