"use client";
import { Eye } from "lucide-react";
import React from "react";
import { toast } from "./ui/use-toast";
import { updateProductViews } from "@/services/posts";

const EyeItem = ({ id }) => {
  const updateViews = async () => {
    const res = await updateProductViews(id);
    if (res.error) {
      toast({ title: res.error });
    }
  };
  return (
    <div
      onClick={updateViews}
      className="flex justify-center items-center bg-white p-1.5 rounded-full cursor-pointer"
    >
      <Eye size={20} color="gray" />
    </div>
  );
};

export default EyeItem;
