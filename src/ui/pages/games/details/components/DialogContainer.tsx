"use client";
import { Dialog, Inset } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const DialogContainer = ({ children }: PropsWithChildren) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="h-20 aspect-video cursor-pointer hover:opacity-80 transition-opacity">
          {children}
        </div>
      </Dialog.Trigger>
      <Dialog.Content size={"4"}>
        <Inset>{children}</Inset>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export { DialogContainer };
