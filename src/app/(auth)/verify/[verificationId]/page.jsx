// import { toast } from "@/components/ui/use-toast";
import { emailVerify } from "@/utils/actions";
import React from "react";

const Verification = async ({ params }) => {
  console.log(params?.verificationId);
  const res = await emailVerify(params?.verificationId);
  //   if (res?.error) {
  //     toast({ title: res.error });
  //   }
  return (
    <div className="text-white grid place-content-center h-screen">
      {res?.error || "loading"}
    </div>
  );
};

export default Verification;
