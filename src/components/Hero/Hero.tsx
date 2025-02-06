
import Fanta1 from "@/assets/fanta1.png";
import Fanta2 from "@/assets/fanta2.png";
import Fanta3 from "@/assets/fanta3.png";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
// import Navbar from "../components/Navbar";
import { useState } from "react";



const SlideRight = (delay:number) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};
type headphoneDataType ={
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price: string;
  modal: string;
  bgColor: string;
}

const headphoneData: headphoneDataType[] = [
  {
    id: 1,
    image: Fanta1,
    title: "Orange Fanta",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$40",
    modal: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: Fanta2,
    title: "Cola Zero",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Zero",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: Fanta3,
    title: "Coca Cola",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Cola",
    bgColor: "#ac1a00",
  },
];


const Hero = () => {
  const [activeData, setActiveData] = useState<headphoneDataType>(headphoneData[0]);

  const handleActiveData = (data:headphoneDataType) => {
    setActiveData(data);
  }

  return (
    <motion.section
      initial={{backgroundColor: activeData.bgColor}}
      animate={{backgroundColor: activeData.bgColor}}
      transition={{duration: 0.5}}
      className="bg-brandDark text-white"
    >
      {/* <Navbar /> */}
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* ----Headphone Info---- */}
        <div className="flex xlex-col justify-center py-14 d:py-0 xl:max-w-[500p">
          <div>
            <AnimatePresence mode="wait">
              <motion.h1>
                {activeData.title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p>
                {activeData.subtitle}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence>
              <motion.button>
                Order Now
              </motion.button>
            </AnimatePresence>

            {/* ----Headphone List Separator---- */}

            <motion.div>
              <div></div>
              <p>Top Recommendation</p>
              <div></div>
            </motion.div>

            {/* ----Headphone List Switcher---- */}
            <motion.div>
              {headphoneData.map((data) => (
                <div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              ))}
            </motion.div>


          </div>
        </div>

        {/* ----Hero Image---- */}
        <div className="flex flex-col justify-end items-center relative order-1 md:order-2 ">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: {
                    duration: 0.4,
                  },
                }}
                src={activeData.image}
                alt=""
                className="w-[150px] md:w-[200px] xl:w-[350px] img-shadow relative z-10"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                }}
                className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* ______ WhatsApp Icon ______ */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>


      </div>
    

    </motion.section>
  )
}

export default Hero