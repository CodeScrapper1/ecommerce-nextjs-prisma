"use server";

import prisma from "@/utils/connection";
import { revalidatePath } from "next/cache";

export const CreateCategory = async (formData, image, id) => {
  const name = formData.get("name");
  console.log(name, image);
  if (!name || !image) {
    return { error: "Please fill all fields" };
  }

  let category;
  try {
    if (id) {
      category = await prisma.category.update({
        where: { id },
        data: { name, image },
      });
    } else {
      category = await prisma.category.create({
        data: { name, image },
      });
    }

    if (!category) {
      return { error: `Category not ${id ? "updated" : "created"}` };
    }
  } catch (error) {
    if (!category) {
      return { error: `Category not ${id ? "updated" : "created"}` };
    }
  }

  revalidatePath("/dashboard/categories");
  return { result: category };
};

// get all categories
export const getCategories = async () => {
  let categories;
  try {
    categories = await prisma.category.findMany();
    if (!categories.length) {
      return { error: `Categories not found` };
    }
  } catch (error) {
    return { error: `Categories not found` };
  }

  revalidatePath("/dashboard/products");
  return { result: categories };
};
