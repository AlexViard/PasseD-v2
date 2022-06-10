import { Link } from "react-router-dom";
import styled from 'styled-components'

const Layout = styled.nav`
  padding: 1.5em;
  display: flex;
  justify-content: center;
  gap: 2em;
  background-color: var(--primary-color);

  &> * {
    position: relative;
    text-decoration: none;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 700;
    transition: all 0.2s ease-in-out;
    color: #fff;

    &::after {
      position: absolute;
      content: "";
      top: 100%;
      left: 10%;
      width: 80%;
      height: 3px;
      background: #fff;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`

export const Navbar = () => {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <Link to="/projects">Projets</Link>
      <Link to="/team">L'equipe</Link>
      <Link to="/donate">Donations</Link>
    </Layout>
  )
}