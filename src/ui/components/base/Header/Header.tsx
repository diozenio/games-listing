import { Dropdown } from "./Dropdown";
import { ThemeButton } from "./ThemeButton";
import Link from "next/link";
import Image from "next/image";
import LogoLight from "@/ui/assets/logo/logo_light.svg";
import LogoDark from "@/ui/assets/logo/logo_dark.svg";
import { LuGithub } from "react-icons/lu";

const Header = () => {
  return (
    <header className="w-full flex flex-row px-6 py-6 justify-between items-center md:px-10">
      <Image src={LogoLight} alt="Logo" className="dark:hidden" />
      <Image src={LogoDark} alt="Logo" className="hidden dark:flex" />
      <div className="md:hidden">
        <Dropdown />
      </div>
      <div className="hidden md:flex flex-row gap-8 items-center">
        <Link href={"https://github.com/diozenio/"} target="_blank">
          <LuGithub size={24} />
        </Link>
        <ThemeButton />
      </div>
    </header>
  );
};

export { Header };
