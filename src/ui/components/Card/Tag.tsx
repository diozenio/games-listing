import { PropsWithChildren } from "react";

const Tag = ({ children }: PropsWithChildren) => {
  return (
    <div className="py-2 px-3 rounded-md  bg-dark-300 hover:brightness-95 dark:hover:brightness-110 cursor-default ease-in-out duration-200  dark:bg-dark-700">
      <p className="font-semibold text-sm">{children}</p>
    </div>
  );
};

export { Tag };
