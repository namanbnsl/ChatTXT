"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/useModalStore";
import { PlusCircle } from "lucide-react";

const NewChatBtn = () => {
  const { onOpen } = useModal();

  return (
    <Button
      onClick={() => onOpen("createChat")}
      className="w-full"
      variant={"outline"}
    >
      New Chat <PlusCircle className="w-4 h-4 ml-1" />
    </Button>
  );
};

export default NewChatBtn;
