import { motion } from "framer-motion";
import Logo from "@/assets/logo.png";
import CardsImg from "@/assets/credit-cards.webp";
import { FaFacebook, FaPhone, FaInstagram,FaTelegram, FaGoogle } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <img src={Logo} alt="" className="max-w-[100px] invert" />
            <div>
              <p className="flex items-center gap-2">
                <FaPhone /> +91 1234567890
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <FaMapLocation /> Buenos Aires, Argentina
              </p>
            </div>
          </motion.div>

          {/* footer Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
                <FaFacebook   className="text-3xl hover:scale-105 duration-300"/>
                <FaInstagram  className="text-3xl hover:scale-105 duration-300"/>
                <FaTelegram   className="text-3xl hover:scale-105 duration-300"/>
                <FaGoogle     className="text-3xl hover:scale-105 duration-300"/>
            </div>
            <div className="space-y-2">
                <p>Payment Methods</p>
                <img src={CardsImg} alt="" />
            </div>

          </motion.div>
        </div>
        <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
         Copyright &copy; {new Date().getFullYear()} Fanta FM. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
