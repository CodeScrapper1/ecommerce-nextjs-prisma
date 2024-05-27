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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import FormInput from "./FormInput";
import SelectForm from "./SelectForm";
import { useEffect, useState } from "react";
import { getCategories } from "@/services/categories";
import { UploadDropzone } from "@/lib/uploadthing";
import { addUpdatePost } from "@/services/posts";
import { toast } from "./ui/use-toast";

const CreateUpdateProd = ({ children, product }) => {
  const form = useForm();
  const [getCat, setCat] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (product?.images) setImages(product.images);
    categories();
  }, []);
  const categories = async () => {
    const res = await getCategories();
    setCat(res.result);
  };
  const handleSubmit = async (formData) => {
    const categoryId = form.getValues().categoryId || product.categoryId;
    const res = await addUpdatePost(formData, images, categoryId, product?.id);
    if (res.result) {
      toast({
        title: "product successfully created",
      });
    } else {
      toast({
        title: "product not created",
      });
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
        <Form {...form}>
          <form action={handleSubmit}>
            <div className="grid gap-4 py-4">
              <FormInput
                id="name"
                label="Name"
                placeholder="Full name"
                type="text"
                defaultValue={product?.name || ""}
                className="h-10"
              />
              <FormInput
                id="description"
                label="Description"
                placeholder="Add Description"
                type="text"
                defaultValue={product?.description || ""}
                className="h-10"
              />
              <FormInput
                id="price"
                label="Price"
                placeholder="Enter price"
                type="number"
                defaultValue={product?.price || ""}
                className="h-10"
              />
              <SelectForm
                id="categoryId"
                label="Select Category"
                placeholder="Select Category"
                list={getCat}
                control={form.control}
              />
              {!images?.length ? (
                <UploadDropzone
                  endpoint="imageUploader"
                  appearance={{
                    button:
                      "ut-uploading:cursor-not-allowed bg-slate-600 w-full text-xl after:bg-orange-400 max-w-[700px]",
                    allowedContent: "hidden",
                  }}
                  onClientUploadComplete={(res) => {
                    setImages(res);
                  }}
                  onUploadError={(error) => {
                    alert(`ERROR ${error.message}`);
                  }}
                />
              ) : (
                <div className="flex items-center gap-2">
                  {images?.map((img, index) => (
                    <div key={index}>
                      <img src={img?.url || img} className="h-16 w-16" alt="" />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUpdateProd;
