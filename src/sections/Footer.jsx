import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants/index";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" height={46} width={150} />
          </a>
          <p className="mt-5 text-white-400 max-w-md font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}{" "}
              </h4>
              <ul className="">
                {section.links.map((link) => (
                  <li className="mt-3 text-white font font-montserrat leading-normal hover:text-slate-gray">
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center max-sm:gap-3">
        <div className="flex justify-start gap-2 font-montserrat">
          <img src={copyrightSign} alt="logo" width={20} height={20} />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="text-xl font-montserrat font-bold">
          Created by @VAMSHI MAREPU
        </p>
      </div>
    </footer>
  );
};

export default Footer;
