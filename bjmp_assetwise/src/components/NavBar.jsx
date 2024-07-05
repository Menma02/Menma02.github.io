import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import logoImg from '../images/logoImg.png';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [active, setActive] = useState('Home');

  const handleSetActive = (to) => {
    setActive(to);
    setClick(false);
  };

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Contact', to: 'contact' },
    { name: 'LOGIN', to: 'login' },
  ];

  const content = (
    <div className="lg:hidden block absolute top-14 left-0 right-0 bg-blue transition shadow-xl z-50">
      <ul className="text-center text-xl font-pops p-4">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`my-4 py-4 border-b border-white hover:bg-orange hover:rounded-lg ${
              active === item.name ? 'bg-orange rounded-lg' : ''
            }`}
          >
            <Link
              to={item.to}
              smooth
              duration={500}
              onSetActive={() => handleSetActive(item.name)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50">
      <div className="h-10vh bg-blue flex justify-between text-white lg:py-2 px-4 sm:px-20 py-2 shadow-xl">
        <div className="lg:ml-10 flex items-center flex-1">
          <img src={logoImg} alt="LOGO" className="w-16 mr-2" />
          <span className="text-3xl font-semibold">AssetWise</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={`m-2 transition border-b-2 border-blue p-2 ${
                    item.name === 'LOGIN' ? 'bg-orange rounded-lg ' : 'hover:border-orange'
                  } cursor-pointer ${
                    active === item.name ? 'text-orange border-orange' : 'hover:text-gray'
                  }`}
                >
                  <Link
                    to={item.to}
                    smooth
                    duration={500}
                    onSetActive={() => handleSetActive(item.name)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition hover:text-orange" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
