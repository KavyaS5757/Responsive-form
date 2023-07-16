import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #ffb3ff;
height: 80px;
width: 100%;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 2;
`;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 200px;
width: 100vh,
cursor: pointer;
&.active {
	color: #4d4dff;
}
`;

export const Bars = styled(FaBars)`

color: black;
@media screen and (max-width: 768px) {
	display: flex;
	position: absolute;
	top: 0;
	right: 0;
	
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
width: 100vw
overflow:hidden;
white-space: nowrap; 
@media screen and (max-width: 1000px) {
	display: none;
}
`;
