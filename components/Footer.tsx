import { FaLocationArrow } from "react-icons/fa6";
import { IoDownload } from "react-icons/io5";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Excited to work with incredable <span className="text-purple">people.</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Thank you for dropping by.
        </p>
        <div className="flex ">
          <a download href="/Resume.pdf" className="download-btn" style={{ marginRight: 20 }}>
            <MagicButton
              title="Download Resume"
              icon={<IoDownload />}
              position="right"
            />
          </a>
          <a href="mailto:murtaza.ml.lakhani@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Murtaza Lakhani.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link}>
                <Image src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
