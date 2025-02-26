import PixelCard from "../PixelCard/PixelCard";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="pt-5 text-5xl bg-pink-200 text-center font-semibold text-gray-900 sm:text-6xl">
        Where To Find Us
      </div>
      <div className="flex flex-col pt-20 bg-pink-200 justify-center items-center pb-40 lg:flex-row gap-10">
        {/* Instagram Card */}
        <PixelCard variant="pink">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <FaInstagram className="text-white text-5xl mb-4" />
            <h3 className="text-lg font-bold text-gray-900">Instagram</h3>
            <p className="text-sm text-gray-700">
              Stay updated and connect with us on Instagram.
            </p>
            <a
              href="https://www.instagram.com/infobabble/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 px-4 py-2 rounded-lg hover:opacity-90"
            >
              Follow Us
            </a>
          </div>
        </PixelCard>

        {/* LinkedIn Card */}
        <PixelCard variant="pink">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <FaLinkedin className="text-white text-5xl mb-4" />
            <h3 className="text-lg font-bold text-gray-900">LinkedIn</h3>
            <p className="text-sm text-gray-700">
              Let’s connect and engage on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/company/infobabble/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-4 py-2 rounded-lg hover:opacity-90"
            >
              Connect
            </a>
          </div>
        </PixelCard>

        {/* Email Card */}
        <PixelCard variant="pink">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <FaEnvelope className="text-white text-5xl mb-4" />
            <h3 className="text-lg font-bold text-gray-900">Email</h3>
            <p className="text-sm text-gray-700">
              Feel free to reach out to us via email.
            </p>
            <a
              href="mailto:info.babbleapp@gmail.com"
              className="mt-4 text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 px-4 py-2 rounded-lg hover:opacity-90"
            >
              Send Email
            </a>
          </div>
        </PixelCard>
      </div>
    </>
  );
}

export default Contact;
