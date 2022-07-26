import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
export default function LeftNavbar() {
  const [sidebar, setSideBarOpen] = useState(true);
  const sidebarOpenClose = () => {
    setSideBarOpen(!sidebar);
  };
  return (
    <div className="left-navbar">
      <SidebarNav sidebar={sidebar}>
        <NavbarWraper>
          <NavIcon to="#">
            <FontAwesomeIcon icon={faBars} onClick={sidebarOpenClose} />
          </NavIcon>
          <h2>hello</h2>
        </NavbarWraper>
      </SidebarNav>
    </div>
  );
}
const SidebarNav = styled.nav`
  width: 250px;
  background-color: #f4f4f4;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
const NavbarWraper = styled.nav`
  diplay: flex;
  justify-content: space-between;
  height: 100vh;
  flex-direction: column;
  gap: 50px;
`;
const NavIcon = styled(Link)`
  height: 180px;
`;
