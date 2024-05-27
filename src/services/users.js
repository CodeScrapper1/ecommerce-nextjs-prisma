"use server";

import { getSession } from "@/utils/actions";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
import prisma from "@/utils/connection";

// get user
export const getUser = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return { error: "User not found" };
  }
  let user;

  try {
    user = await prisma.user.findUnique({ where: { id: session.user.id } });
    if (!user) {
      return { error: "User not found" };
    }
  } catch (error) {
    return { error: "User not found" };
  }

  revalidatePath("/dashboard/settings");
  return { result: user };
};
// get all categories
export const updateProfile = async (formData) => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return { error: "User not found" };
  }
  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || !email) {
    return { error: "please fill all fields" };
  }
  let user;
  try {
    user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name,
        email,
      },
    });
    if (!user) {
      return { error: `user not updated` };
    }
  } catch (error) {
    return { error: `user not updated` };
  }

  revalidatePath("/dashboard/settings");
  return { result: user };
};

// change password
export const updatePassword = async (formData) => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return { error: "User not found" };
  }
  const oldPassword = formData.get("password");
  const newPassword = formData.get("newpassword");

  if (!oldPassword || !newPassword) {
    return { error: "please fill all fields" };
  }
  let user;
  try {
    if (oldPassword.length && newPassword.length < 8) {
      return { error: "Password must be min 8 char long" };
    }

    const isMatch = await bcrypt.compare(oldPassword, session.user.password);

    if (!isMatch) {
      return { error: "Password not matched" };
    }

    const password = await bcrypt.hash(newPassword, 10);

    user = await prisma.user?.update({
      where: { id: session.user.id },
      data: { password },
    });

    if (!user) {
      return { error: `password not updated` };
    }

    session.user = user;
    session.isLoggedIn = true;
    await session.save();
  } catch (error) {
    return { error: `user not updated` };
  }

  revalidatePath("/dashboard/settings");
  return { result: user };
};
