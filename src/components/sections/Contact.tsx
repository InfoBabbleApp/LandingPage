import { PinContainer } from "../ui/3d-pin";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Importing the social media and email icons

function Contact() {
  return (
    <>
      <div className="mb-10 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-black text-center">Where To Find Us</div>
      <div className="flex flex-col justify-center items-center mb-40 lg:flex-row">
        <div>
          <PinContainer
            title="/instagram/infoBabble"
            href="https://www.instagram.com/infobabble/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
                Instagram
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Stay updated and connect with us on Instagram
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-500 relative">
                <FaInstagram className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" size={40} />
              </div>
            </div>
          </PinContainer>
        </div>
        <div className="mt-20 md:mt-0">
          <PinContainer
            title="/linkedin/infoBabble"
            href="https://www.linkedin.com/company/infobabble/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
                LinkedIn
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Let’s connect and engage on LinkedIn
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-pink-300 via-pink-500 to-pink-700 relative">
                <FaLinkedin className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" size={40} />
              </div>
            </div>
          </PinContainer>
        </div>
        <div className="mt-20 md:mt-0">
          <PinContainer
            title="info.babbleapp@gmail.com"
            href="mailto:info.babbleapp@gmail.com"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
                Email
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Feel free to reach out to us via email
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-pink-400 via-pink-600 to-pink-800 relative">
                <FaEnvelope className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" size={40} />
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </>
  );
}

export default Contact;
