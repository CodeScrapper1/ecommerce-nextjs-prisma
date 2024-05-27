"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormInput from "@/components/FormInput";
import FormSubmit from "@/components/FormSubmit";
import { getUser, updatePassword, updateProfile } from "@/services/users";
import { toast } from "@/components/ui/use-toast";

const Settings = () => {
  const [user, setUser] = useState({});
  const getUserDetails = async () => {
    const res = await getUser();
    setUser(res.result);
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  const updateUser = async (formData) => {
    const res = await updateProfile(formData);
    if (res.result) {
      toast({
        title: "users updated successfully",
      });
    } else {
      toast({
        title: "user not updated",
      });
    }
  };

  const changePassword = async (formData) => {
    const res = await updatePassword(formData);
    if (res.result) {
      toast({ title: "password changed successfully" });
    } else {
      toast({ title: "Password not changed" });
    }
  };
  return (
    <div className="w-full flex flex-col min-h-screen mx-2 md:mx-12">
      <main className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div>
          <h1 className="font-semibold text-3xl">Account</h1>
          <p className="text-gray-400 text-sm">
            Update your account settings below
          </p>
        </div>
        <div className="grid w-full items-start gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                You can update your profile information here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                action={updateUser}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <FormInput
                  id="name"
                  label="Name"
                  defaultValue={user.name}
                  type="text"
                  className="h-10"
                />
                <FormInput
                  id="email"
                  label="Email"
                  defaultValue={user.email}
                  type="email"
                  className="h-10"
                />
                <FormSubmit className="w-20 text-white bg-black hover:bg-slate-700">
                  Save
                </FormSubmit>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>
                You can update your password here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                action={changePassword}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <FormInput
                  id="password"
                  label="Old Password"
                  type="password"
                  className="h-10"
                />
                <FormInput
                  id="newpassword"
                  label="New Password"
                  type="password"
                  className="h-10"
                />
                <FormSubmit className="w-20 text-white bg-black hover:bg-slate-700">
                  Save
                </FormSubmit>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;
