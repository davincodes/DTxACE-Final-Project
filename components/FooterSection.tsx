import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterSection() {
  return (
    <footer className="bg-black border-t border-gray-800 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Logo */}
        <div className="mb-6 md:mb-0 flex-shrink-0 flex flex-col items-start">
          <a href="/">
              <img src="/images/Red-Curtain-Logo.png" alt="Red Curtain Logo" />
            </a>
        </div>
        {/* Navigation */}
        <div className="flex flex-col md:flex-row gap-10 text-white text-base">
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">Events</a>
            <a href="#" className="hover:underline">News</a>
            <a href="#" className="hover:underline">Episodes</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">For professionals</a>
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Contact us</a>
            <a href="#" className="hover:underline">Terms &amp; conditions</a>
          </div>
        </div>
        {/* Social & Community */}
        <div className="flex flex-col items-start gap-4">
          <span className="text-white text-base mb-2">
            Follow us on social media and join our growing<br />
            community of performing arts enthusiasts.
          </span>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#232428]">
                <FontAwesomeIcon icon={faInstagram} className="text-white text-xl" />
              </span>
            </a>
            <a href="#" aria-label="Facebook">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#232428]">
                <FontAwesomeIcon icon={faFacebookF} className="text-white text-xl" />
              </span>
            </a>
            <a href="#" aria-label="Twitter">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#232428]">
                <FontAwesomeIcon icon={faTwitter} className="text-white text-xl" />
              </span>
            </a>
            <a href="#" aria-label="YouTube">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#232428]">
                <FontAwesomeIcon icon={faYoutube} className="text-white text-xl" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-white text-sm text-left mt-8 px-4 max-w-7xl mx-auto">
        © Red Curtain Addict 2021
      </div>
    </footer>
  );
}