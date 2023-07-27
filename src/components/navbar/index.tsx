import { useState } from "react";
import { logo } from "../../assets";
import { navLinks } from '../../constants';

const NavBar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="sm:flex w-full justify-between items-center px-8 sm:px-0 sm py-7">
      <img src={logo} className="w-[124px] h-[32px] relative z-10" alt="bank"/>
      <ul className="list-none hidden sm:flex gap-12">
        {navLinks.map((nav) => 
          <li key={nav.id} className="text-dimWhite text-base font-light"><a href={`#${nav.title}`}>{nav.title}</a></li> 
        )}
      </ul>
      <ul className={`${open ? 'flex' : 'hidden'} list-none p-8 flex-col bg-primary absolute top-[88px] left-0 w-full gap-12 z-10 sm:hidden`}>
        {navLinks.map((nav) => 
          <li key={nav.id} className="text-dimWhite text-base font-light"><a href={`#${nav.title}`}>{nav.title}</a></li> 
        )}
      </ul>
      <div className="absolute top-[40px] right-5 sm:hidden" onClick={() => setOpen(open => !open)}>
        <div className={`hamburger  ${open ? 'is-open' : ''} `}></div>
      </div>
    </nav>
  )
}

export default NavBar;
