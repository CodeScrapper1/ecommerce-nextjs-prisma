import UserList from "@/components/UserList";
import prisma from "@/utils/connection";
import React from "react";

const Users = async () => {
  const users = await prisma.user.findMany();
  console.log(users, "users");
  return <UserList users={users} />;
};

export default Users;
