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
            {socialMedia.map((icons) => (
              <div>
                <img src={icons.src} alt="icon" width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white">
                {section.title}
                <ul>              </h4>

                  {section.links.map((link) => (
                    <li>
                      <a href="/">{link.name}</a>
                    </li>
                  ))} 
                </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
