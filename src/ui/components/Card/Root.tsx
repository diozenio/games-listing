import Link from "next/link";
import { PropsWithChildren } from "react";

interface RootProps {
  href: string;
}

const Root = ({ children, href }: PropsWithChildren<RootProps>) => {
  return (
    <Link
      href={href}
      className="overflow-hidden flex flex-col items-start rounded-lg bg-dark-200 border-2 border-dark-300 dark:bg-dark-800 dark:border-dark-700"
    >
      {children}
    </Link>
  );
};

export { Root };
