import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../assets/svgs/logo.svg";
import Moon from "../assets/svgs/moon.svg";
import User from "../assets/images/user.png";
import { Link } from "react-router-dom";
function NavBar(props) {
  const StyledNav = tw.nav`bg-[#373B53]`;
  const StyledNavWrapper = tw.div`
    flex
    justify-between 
    items-center
  `;
  const NavLogo = tw.div`
    relative
    w-[72px] 
    h-[72px] 
    bg-[#7C5DFA]
    flex
    rounded-r-[20px]
    mr-auto
  `;

  return (
    <StyledNav>
      <StyledNavWrapper>
        <Link to="/">
          <NavLogo>
            <div className="absolute w-[72px] h-[36px] bottom-0 rounded-tl-[20px] rounded-br-[20px] bg-[#9277FF]"></div>
            <img
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              src={Logo}
              alt=""
            />
          </NavLogo>
        </Link>
        <div className="nav-right-wpr flex">
          <img src={Moon} alt="" className="mr-[24px]" />
          <div className="border-r-2 border-[#494E6E]"></div>
          <div className="w-[80px] h-[72px] flex justify-center items-center">
            <img src={User} alt="" />
          </div>
        </div>
      </StyledNavWrapper>
    </StyledNav>
  );
}

export default NavBar;
