import React, { useState } from "react";
import authService from "../../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Input } from "../index";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const createAcc = async (data) => {
    setError("");
    try {
      const session = await authService.createAccount(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
        }
        navigate("/allposts");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center min-h-screen bg-black justify-center">
        <div className="mx-auto w-full max-w-lg bg-gray-200 rounded-xl p-10 border border-black/10">
          <div className="mb-2 flex items-center justify-center">
            <span className="inline-block w-full max-w-[150px]">
              <Link
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <span className="sefl-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  <div class="flex items-center  space-x-3">
                    <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold text-lg">
                      ZCA
                    </div>
                    <span class="text-2xl font-extrabold text-blue-500 ">
                      TechX
                    </span>
                  </div>
                </span>
              </Link>
            </span>
          </div>

          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign up to create account
          </h2>

          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

          <form onSubmit={handleSubmit(createAcc)}>
            <div className="space-y-5">
              <Input
                label="User-Name"
                placeholder=""
                type="text"
                {...register("User-Name", {
                  required: true,
                })}
              />

              <Input
                label="Email address"
                type="email"
                placeholder=""
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />

              <Input
                label="Password"
                placeholder=""
                type="password"
                {...register("password", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                        value
                      ) ||
                      "Ensure Passoword have one uppercase, one lowercase, one special character and one number",
                  },
                })}
              />

              <Button type="submit" children="SignUp"></Button>

              <p className="mt-2 text-center text-base text-black/60">
                Already have an account?&nbsp;
                <Link
                  to="/login"
                  className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                  Sign In
                </Link>
              </p>

              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
