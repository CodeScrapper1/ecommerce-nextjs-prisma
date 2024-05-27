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
import { toast } from "./ui/use-toast";
import { deleteFunction } from "@/utils/actions";

const DeleteButton = ({ children, itemId, table }) => {
  const handleSubmit = async () => {
    const result = await deleteFunction({ id: itemId, table });
    if (result?.result) {
      toast({ title: "Category deleted successfully" });
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
            Do you want to delete this item.
          </DialogDescription>
        </DialogHeader>
        <form action={handleSubmit}>
          <DialogFooter>
            <Button type="submit">Delete</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteButton;
