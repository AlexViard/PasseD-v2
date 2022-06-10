import { useState } from 'react'
import styled from 'styled-components'
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from 'react-icons/bs'

import slide1 from 'src/pictures/slide1.jpg'
import slide2 from 'src/pictures/slide2.jpg'
import slide3 from 'src/pictures/slide3.jpg'


const Layout = styled.div`
  position: relative;
  ${'' /* filter: grayscale(90%); */}
  width: 100%;
  height: 100%;
  background-size: cover;
  animation: animate 20s ease-in-out infinite;
  background-position: center;

  @keyframes animate {
    0%, 100% {
      background-image: url(${slide1});
    }
    25%, 100% {
      background-image: url(${slide2});
    }
    50%, 100% {
      background-image: url(${slide3});
    }
    75%, 100% {
      background-image: url(${slide1});
    }
  }
`

const ArrowLeft = styled(BsArrowLeftCircle)`
  font-size: 3em;
  position: absolute;
  color: #fff;
  left: 0px;
  top: 50%;
  opacity: 0;
  transition: all .3s ease-in-out;

  &.active {
    cursor: pointer;
    opacity: 1;
    left: 50px;
  }
`

const ArrowRight = styled(BsArrowRightCircle)`
  font-size: 3em;
  color: #fff;
  position: absolute;
  right: 0px;
  top: 50%;
  opacity: 0;
  transition: all .3s ease-in-out;

  &.active {
    cursor: pointer;
    opacity: 1;
    right: 50px;
  }
`

export const Carrousel = ({ children }) => {
  const [active, setActive] = useState(false)
  
  return (
    <Layout
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <ArrowLeft className={active && "active"} />
        {children}
      <ArrowRight className={active && "active"} />
    </Layout>
  )
}
