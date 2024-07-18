import React from 'react';
import Head from 'next/head';
import Navbar from './comm/Navbar';
import Footer from './comm/Footer';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>EliEzer</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
