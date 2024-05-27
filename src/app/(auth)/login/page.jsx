"use client";
import FormInput from "@/components/FormInput";
import FormSubmit from "@/components/FormSubmit";
import { toast } from "@/components/ui/use-toast";
import { UploadButton } from "@/lib/uploadthing";
import { login } from "@/utils/actions";
import Link from "next/link";
import React from "react";

const Login = () => {
  const onSubmit = async (formData) => {
    const res = await login(formData);
    if (res?.error) {
      toast({ title: res.error });
    } else toast({ title: res.message });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="h-screen bg-[#cbe3e9]">
        <img src="./signup.png" alt="" />
      </div>
      <div className="p-[15%] bg-white">
        <h1 className="text-2xl font-medium">Create an account</h1>
        <form action={onSubmit}>
          <FormInput
            id="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            className="h-10"
          />
          <FormInput
            id="password"
            label="Password"
            placeholder="Enter the password"
            type="password"
            className="h-10 mb-10"
          />

          <FormSubmit className="w-full bg-red-500 text-white h-12 hover:bg-red-400 mt-10">
            Login
          </FormSubmit>
          <Link
            href="/signup"
            className="cursor-pointer flex items-center justify-center text-blue-400"
          >
            signup
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
