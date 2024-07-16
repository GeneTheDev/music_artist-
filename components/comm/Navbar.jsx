import React from "react";
import { Icon } from '@iconify/react';
import spotifyIcon from '@iconify/icons-simple-icons/spotify';
import soundcloudIcon from '@iconify/icons-simple-icons/soundcloud';
import youtubeIcon from '@iconify/icons-simple-icons/youtube';
import instagramIcon from '@iconify/icons-simple-icons/instagram';
import facebookIcon from '@iconify/icons-simple-icons/facebook';
import twitterIcon from '@iconify/icons-simple-icons/twitter';

const Navbar = ({ site }) => {
  return (
    <nav className="w-full text-white py-1 fixed top-0 left-0 flex items-center justify-between z-10 h-24 bg-gray-900" style={{
      background: 'linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(200, 200, 200, 0.4))',
    }}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <a href="/" className="block w-24 h-auto  rounded-lg p-2 cursor-pointer">
            EliEzer
          </a>
        </div>
        <ul className="flex items-center space-x-8">
          <li className="list-none inline-block mx-5 text-lg">
            <a href="/" className="hover:text-gray-300">Home</a>
          </li>
          <li className="list-none inline-block mx-5 text-lg">
            <a href="/about" className="hover:text-gray-300">About</a>
          </li>
          <li className="list-none inline-block mx-5 text-lg">
            <a href="/services" className="hover:text-gray-300">Services</a>
          </li>
          <li className="list-none inline-block mx-5 text-lg">
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
        <ul className="flex space-x-4 ">
          <li className="list-none inline-block" >
                <a href={site.platforms.spotify} target="_blank"><Icon icon={spotifyIcon} className="text-2xl" /></a>
              </li>
              <li className="list-none inline-block">
                <a href={site.platforms.soundcloud} target="_blank"><Icon icon={soundcloudIcon} className="text-2xl" /></a>
              </li>
              <li className="list-none inline-block">
                <a href={site.platforms.youtube} target="_blank"><Icon icon={youtubeIcon} className="text-2xl" /></a>
              </li >
              <li className="list-none inline-block">
                <a href={site.socials.instagram} target="_blank"><Icon icon={instagramIcon} className="text-2xl" /></a>
              </li>
              <li className="list-none inline-block">
                <a href={site.socials.facebook} target="_blank"><Icon icon={facebookIcon} className="text-2xl" /></a>
              </li>
              <li className="list-none inline-block">
                <a href={site.socials.twitter} target="_blank"><Icon icon={twitterIcon} className="text-2xl" /></a>
              </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
