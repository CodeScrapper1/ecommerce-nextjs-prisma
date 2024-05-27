"use client";
import { addFavorite } from "@/services/posts";
import { Heart } from "lucide-react";
import React from "react";
import { toast } from "./ui/use-toast";

const Favorite = ({ id }) => {
  const addToFavorite = async () => {
    const { result, error } = await addFavorite(id);

    if (result) {
      toast({ title: "product added in fav" });
    } else {
      toast({ title: error });
    }
  };
  return (
    <div
      className="flex justify-center items-center bg-white p-1.5 rounded-full cursor-pointer"
      onClick={addToFavorite}
    >
      <Heart size={20} color="gray" />
    </div>
  );
};

export default Favorite;
