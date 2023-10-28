import { PropsWithChildren } from "react";

const Content = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-start px-6 py-8 gap-5">{children}</div>
  );
};

export { Content };
