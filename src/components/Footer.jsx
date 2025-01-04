import logo from "../assets/logo_black.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="my-9">
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={logo}
          width={200}
          className="my-8"
          alt="logo"
        />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.5 }}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FE5000] hover:text-black"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wider text-black">
        &copy;2025 Nileshhablani. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
