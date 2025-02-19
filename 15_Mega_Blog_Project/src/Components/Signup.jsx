import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Input, Logo } from "./index";
import { createLogger } from "vite";

function Signup() {
const navigate = useNavigate();
const dispatch = useDispatch();
const { register, handleSubmit } = useForm();
const [error, setError] = useState("");

const create = async (data) => {
    setError("");

    try {
      // signup ke liye ek account create karna padega
    const userData = await authService.createAccount(data);
    if (userData) {
        const session = await authService.getCurrentUser();
        if (session) {
        dispatch(login(session));
        }
        navigate("/");
    }
    } catch (error) {
    setError(error.message);
    console.log("Signup :: error", error);
    }
};
return (
    <div className="flex items-center justify-center">
    <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
    >
        <div className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
        </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
        Sign up to create account
        </h2>

        
        <p className="mt-2 text-center text-base text-black/60">
        Already have an account?&nbsp;
        <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
        >
            Sign In
        </Link>
        </p>

        {/* errors hai toh para dekha au */}
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
        <div className="space-y-5">
            <Input
            label="Name"
            type="text"
            placeholder="Enter your name"
            {...register("name", {
                required: true,
            })}
            />

            <Input
            label="Email "
            placeholder="Enter your email"
            type="email"
              // spread karana jaruhai  nahi toh overrite hojayega
            {...register("email", {
                required: true,

                // yaha pe ham email regex use kar rahe hai
                validate: {
                matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
            })}
            />

            <Input
            label="Password"
            placeholder="Enter your password"
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

            <Button type="submit" className="w-full">
            Create Account
            </Button>
        </div>
        </form>
    </div>
    </div>
);
}

export default Signup;
