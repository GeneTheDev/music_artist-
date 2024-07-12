import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported

const Navbar = () => {
  const nav = useRef(null);
  const logoNav = useRef(null);
  const collapsibleNav = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const collapseNav = () => {
    if (collapsibleNav.current.classList.contains('show')) {
      // Manually toggle collapse as $bootstrap.toogleCollapse equivalent
      collapsibleNav.current.classList.remove('show');
    }
  };

  const onScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80 ||
      window.innerWidth < 767
    ) {
      nav.current.style.background = '#121212';
      nav.current.style.fontSize = '1rem';
      logoNav.current.style.width = '100px';
    } else {
      nav.current.style.background = 'transparent';
      nav.current.style.fontSize = '1.3rem';
      logoNav.current.style.width = '130px';
    }
  };

  const scrollHandler = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) {
      nav.current.classList.remove('scrolled-down');
      nav.current.classList.add('scrolled-up');
    } else {
      nav.current.classList.remove('scrolled-up');
      nav.current.classList.add('scrolled-down');
    }
    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    if (nav.current) window.addEventListener('scroll', scrollHandler);
    window.onscroll = onScroll;
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.onscroll = null;
    };
  }, [lastScrollTop]);

  return (
    <nav ref={nav} className="navbar navbar-expand-md navbar-dark px-4 py-2 fixed-top smart-scroll" id="navbar">
      <Link href="/" className="navbar-brand">
          <img ref={logoNav} src="/images/bayza-logo.svg" width="100" alt="Logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div ref={collapsibleNav} className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item" onClick={collapseNav}>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <span id="navbardrop" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Releases
            </span>
            <div className="dropdown-menu">
              <Link href="/releases" className="dropdown-item" onClick={collapseNav}>
                All
              </Link>
              <Link href="/releases/all-bootlegs" className="dropdown-item" onClick={collapseNav}>
                Bootlegs
              </Link>
              <Link href="/releases/2024" className="dropdown-item" onClick={collapseNav}>
                2024
              </Link>
              <Link href="/releases/2023" className="dropdown-item" onClick={collapseNav}>
                2023
              </Link>
              <Link href="/releases/2022" className="dropdown-item" onClick={collapseNav}>
                2022
              </Link>
              <Link href="/releases/2021" className="dropdown-item" onClick={collapseNav}>
                2021
              </Link>
              <Link href="/releases/2020" className="dropdown-item" onClick={collapseNav}>
                2020
              </Link>
              <Link href="/releases/2019" className="dropdown-item" onClick={collapseNav}>
                2019
              </Link>
              <Link href="/releases/2018" className="dropdown-item" onClick={collapseNav}>
                2018
              </Link>
            </div>
          </li>
          <li className="nav-item" onClick={collapseNav}>
            <Link href="/fanlinks" className="nav-link">
              Fanlinks
            </Link>
          </li>
          <li className="nav-item" onClick={collapseNav}>
            <Link href="/#about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
