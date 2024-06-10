import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-10 absolute z-10 w-full">
      <nav className="flex justify-between max-container items-center">
        <a href="/">
          <img src={headerLogo} alt="LOGO" width={130} height={30} />
        </a>
        <ul className="flex-1 flex justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray font-medium hover:text-coral-red hover: "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
