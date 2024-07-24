import React, { useState, useEffect, useRef } from "react";
import { Icon } from '@iconify/react';
import { GiHamburgerMenu } from "react-icons/gi";
import spotifyIcon from '@iconify/icons-simple-icons/spotify';
import soundcloudIcon from '@iconify/icons-simple-icons/soundcloud';
import youtubeIcon from '@iconify/icons-simple-icons/youtube';
import instagramIcon from '@iconify/icons-simple-icons/instagram';
import facebookIcon from '@iconify/icons-simple-icons/facebook';
import twitterIcon from '@iconify/icons-simple-icons/twitter';
import Link from "next/link";
import { Link as ScrollLink, scroller } from "react-scroll";

const Navbar = ({ site }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (target, offset) => {
    scroller.scrollTo(target, {
      duration: 700,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset, // Adjust offset to fine-tune positioning
    });
  };

  return (
    <nav className={`w-full text-white py-1 fixed top-0 left-0 flex flex-col md:flex-row items-center justify-between z-50 h-auto md:h-24 ${sticky ? 'bg-gray-900' : 'bg-transparent'}`} style={{
      background: 'linear-gradient(to right, rgba(255, 0, 0, 0.9), rgba(255, 200, 200, 0.9))',
    }} ref={navbarRef}>
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        <div className="logo flex justify-between w-full md:w-auto">
          <Link href="/" className="block w-24 h-auto rounded-lg p-2 cursor-pointer">
            EliEzer O.R.
          </Link>
          <button onClick={toggleMenu} className="md:hidden block">
            <GiHamburgerMenu size={30} className="text-white" />
          </button>
        </div>
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row items-center md:space-x-8 w-full md:w-auto">
            <li className="list-none my-2 md:my-0 mx-5 text-lg">
              <ScrollLink to="hero" smooth={true} duration={700} offset={-70} onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-gray-300 block">
                Home
              </ScrollLink>
            </li>
            <li className="list-none my-2 md:my-0 mx-5 text-lg">
              <ScrollLink to="videos" smooth={true} duration={700} offset={-88} onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-gray-300 block">
                Stream
              </ScrollLink>
            </li>
            <li className="list-none my-2 md:my-0 mx-5 text-lg">
              <ScrollLink to="about" smooth={true} duration={700} offset={-88} onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-gray-300 block">
                About
              </ScrollLink>
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row items-center justify-center md:space-x-4 w-full md:w-auto mt-4 md:mt-0 md:ml-8">
            <li className="list-none inline-block mx-2 md:mx-0">
              <Link href={site.platforms.spotify} target="_blank" rel="noopener noreferrer">
                <Icon icon={spotifyIcon} className="text-2xl" />
              </Link>
            </li>
            <li className="list-none inline-block mx-2 md:mx-0">
              <Link href={site.platforms.soundcloud} target="_blank" rel="noopener noreferrer">
                <Icon icon={soundcloudIcon} className="text-2xl" />
              </Link>
            </li>
            <li className="list-none inline-block mx-2 md:mx-0">
              <Link href={site.platforms.youtube} target="_blank" rel="noopener noreferrer">
                <Icon icon={youtubeIcon} className="text-2xl" />
              </Link>
            </li>
            <li className="list-none inline-block mx-2 md:mx-0">
              <Link href={site.socials.instagram} target="_blank" rel="noopener noreferrer">
                <Icon icon={instagramIcon} className="text-2xl" />
              </Link>
            </li>
            <li className="list-none inline-block mx-2 md:mx-0">
              <Link href={site.socials.facebook} target="_blank" rel="noopener noreferrer">
                <Icon icon={facebookIcon} className="text-2xl" />
              </Link>
            </li>
            <li className="list-none inline-block mx-2 md:mx-0">
              <Link href={site.socials.twitter} target="_blank" rel="noopener noreferrer">
                <Icon icon={twitterIcon} className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
