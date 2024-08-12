import React from "react";
import { Icon } from "@iconify/react";
import spotifyIcon from "@iconify/icons-simple-icons/spotify";
import soundcloudIcon from "@iconify/icons-simple-icons/soundcloud";
import youtubeIcon from "@iconify/icons-simple-icons/youtube";
import instagramIcon from "@iconify/icons-simple-icons/instagram";
import facebookIcon from "@iconify/icons-simple-icons/facebook";
import twitterIcon from "@iconify/icons-simple-icons/twitter";
import styles from "../../styles/about.module.css";

const Footer = ({ site }) => {
  return (
    <footer id="contact" className="bg-white-900 text-white text-left font-light" style={{
      background: 'linear-gradient(to right, rgba(255, 0, 0, 0.9), rgba(255, 200, 200, 0.9))',
    }}>
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-medium mb-4">Stream Music</h4>
            <ul className={`space-y-2 text-white ${styles.poppinsFont}`}>
              <li>
                <a href={site.platforms.spotify} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
                  Spotify
                </a>
              </li>
              <li>
                <a href={site.platforms.soundcloud} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
                  SoundCloud
                </a>
              </li>
              <li>
                <a href={site.platforms.youtube} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
                  YouTube
                </a>
              </li>
               <li>
                <a href={site.platforms.pandora} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
                  Pandora
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Buy Music</h4>
            <ul className={`space-y-2 text-white ${styles.poppinsFont}`}>
              <li>
                <a href={site.platforms.apple} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
                  Apple Music
                </a>
              </li>
             
              {/* <li>
                <a href={site.platforms.deezer} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
                  Deezer
                </a>
              </li> */}
              <li>
                <a href={site.platforms.amazon} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
                  Amazon
                </a>
              </li>
              <li>
                <a href={site.platforms.tidal} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
                  Tidal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="flex space-x-4 mb-4">
              <li>
                <a href={site.platforms.spotify} target="_blank" rel="noopener noreferrer">
                  <Icon icon={spotifyIcon} className="text-2xl text-white" />
                </a>
              </li>
              <li>
                <a href={site.platforms.soundcloud} target="_blank" rel="noopener noreferrer">
                  <Icon icon={soundcloudIcon} className="text-2xl text-white" />
                </a>
              </li>
              <li>
                <a href={site.platforms.youtube} target="_blank" rel="noopener noreferrer">
                  <Icon icon={youtubeIcon} className="text-2xl text-white" />
                </a>
              </li>
              <li>
                <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer">
                  <Icon icon={instagramIcon} className="text-2xl text-white" />
                </a>
              </li>
              {/* <li>
                <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer">
                  <Icon icon={facebookIcon} className="text-2xl text-white" />
                </a>
              </li>
              <li>
                <a href={site.socials.twitter} target="_blank" rel="noopener noreferrer">
                  <Icon icon={twitterIcon} className="text-2xl text-white" />
                </a>
              </li> */}
            </ul>
            <ul className="space-y-2">
              <li>
                <span>Email: </span>
                <a href="mailto:info@EliEzer.com" className="hover:underline text-white">
                  eliezeronrecord@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">
          <p className="mb-0">© EliEzer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
