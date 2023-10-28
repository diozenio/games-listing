import { PropsWithChildren } from "react";

const Title = ({ children }: PropsWithChildren) => {
  return <h3 className="font-bold text-2xl">{children}</h3>;
};

export { Title };
