"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import { UploadButton } from "@/lib/uploadthing";
import { useEffect, useState } from "react";
import { CreateCategory } from "@/services/categories";
import { toast } from "./ui/use-toast";

const CreateUpdateCat = ({ children, category }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (category?.image) setImage(category?.image);
  }, []);

  const handleSubmit = async (formData) => {
    console.log("data");
    const result = await CreateCategory(formData, image, category?.id);
    if (result?.result) {
      toast({ title: "Category created successfully" });
    } else {
      toast({ title: result.error });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{children}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form action={handleSubmit}>
          <div className="grid gap-4 py-4">
            <FormInput
              id="name"
              label="Name"
              placeholder="Full name"
              type="text"
              defaultValue={category?.name || ""}
              className="h-10"
            />
            {!image ? (
              <UploadButton
                endpoint="imageUploader"
                appearance={{
                  button:
                    "ut-uploading:cursor-not-allowed bg-slate-600 w-full text-xl after:bg-orange-400 max-w-[700px]",
                  allowedContent: "hidden",
                }}
                onClientUploadComplete={(res) => {
                  setImage(res[0].url);
                }}
                onUploadError={(error) => {
                  alert(`ERROR ${error.message}`);
                }}
              />
            ) : (
              <div className="flex items-center gap-2">
                <img src={image} className="h-16 w-16" alt="" />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUpdateCat;
