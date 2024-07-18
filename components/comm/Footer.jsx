// components/Footer.js
import React from 'react';
import { Icon } from '@iconify/react';
import spotifyIcon from '@iconify/icons-simple-icons/spotify';
import soundcloudIcon from '@iconify/icons-simple-icons/soundcloud';
import youtubeIcon from '@iconify/icons-simple-icons/youtube';
import instagramIcon from '@iconify/icons-simple-icons/instagram';
import facebookIcon from '@iconify/icons-simple-icons/facebook';
import twitterIcon from '@iconify/icons-simple-icons/twitter';
import Link from 'next/link';

const Footer = ({ site }) => {
  return (
    <footer id="contact" className="bg-white-900 text-white text-left font-light" style={{
      background: 'linear-gradient(to right, rgba(255, 0, 0, 0.9), rgba(255, 200, 200, 0.9))',
    }}>
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-medium mb-4">Stream Music</h4>
            <ul className="space-y-2 text-white">
              <li><Link target="_blank" href={site.platforms.spotify} className="hover:underline text-white">Spotify</Link></li>
              <li><Link target="_blank" href={site.platforms.soundcloud} className="hover:underline text-white">SoundCloud</Link></li>
              <li><Link target="_blank" href={site.platforms.youtube} className="hover:underline text-white">YouTube</Link></li>
              <li><Link target="_blank" href={site.platforms.apple} className="hover:underline text-white">Apple Music</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Buy Music</h4>
            <ul className="space-y-2">
              <li><Link target="_blank" href={site.platforms.itunes} className="hover:underline text-white">iTunes</Link></li>
              <li><Link target="_blank" href={site.platforms.beatport} className="hover:underline text-white">Beatport</Link></li>
              <li><Link target="_blank" href={site.platforms.amazon} className="hover:underline text-white">Amazon</Link></li>
              <li><Link target="_blank" href={site.platforms.bandcamp} className="hover:underline text-white">Bandcamp</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="flex space-x-4 mb-4">
              <li>
                <Link href={site.platforms.spotify} target="_blank"><Icon icon={spotifyIcon} className="text-2xl text-white" /></Link>
              </li>
              <li>
                <Link href={site.platforms.soundcloud} target="_blank"><Icon icon={soundcloudIcon} className="text-2xl text-white" /></Link>
              </li>
              <li>
                <Link href={site.platforms.youtube} target="_blank"><Icon icon={youtubeIcon} className="text-2xl text-white" /></Link>
              </li>
              <li>
                <Link href={site.socials.instagram} target="_blank"><Icon icon={instagramIcon} className="text-2xl text-white" /></Link>
              </li>
              <li>
                <Link href={site.socials.facebook} target="_blank"><Icon icon={facebookIcon} className="text-2xl text-white" /></Link>
              </li>
              <li>
                <Link href={site.socials.twitter} target="_blank"><Icon icon={twitterIcon} className="text-2xl text-white" /></Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <span>Email: </span>
                <Link href="info@EliEzer.com" target="_blank" className="hover:underline text-white">info@EliEzer.com</Link>
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
