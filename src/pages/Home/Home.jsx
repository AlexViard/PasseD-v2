import styled from 'styled-components'

import { Navbar, Button } from 'src/lib-ui'

import { Carrousel } from './Carrousel'

const Layout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr;
`

const TextBox = styled.div`
  position: absolute;
  left: 200px;
  top: 300px;
  color: #fff;
  display: grid;
  grid-template-areas: 
    "title title"
    "subtitle subtitle"
    "button1 button2"
  ;
  grid-template-columns: auto 1fr;
  gap: 2em;

  & .button-1 {
    grid-area: button1;
  }

  & .button-2 {
    grid-area: button2;
  }
`

const Title = styled.h1`
    font-size: 7.5em;
    ${'' /* text-transform: uppercase; */}
    font-weight: 600;
    grid-area: title;
`

const Subtitle = styled.h2`
  max-width: 60ch;
  font-size: 1.1em;
  line-height: 1.5em;
  grid-area: subtitle;
`

export const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Carrousel>
        <TextBox>
          <Title>La Passe D</Title>
          <Subtitle>Association humanitaire engagée pour le développement de la jeunesse dans des zones défavorisées.</Subtitle>
          <Button className="button-1" color="primary">Découvrir</Button>
          <Button className="button-2">Voir plus</Button>
        </TextBox>
      </Carrousel>
    </Layout>
  )
}