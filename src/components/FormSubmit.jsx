import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const FormSubmit = ({ children, disabled, className }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending || disabled}
      className={cn(className)}
      type="submit"
      varient="secondary"
      size="sm"
    >
      {children}
    </Button>
  );
};

export default FormSubmit;
