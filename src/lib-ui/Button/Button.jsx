import styled from 'styled-components'

const Layout = styled.button`
  width: max-content;
  border: none;
  outline: none;
  padding: .5em 1em;
  border-radius: 5px;
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 500;
  background-color: #fff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;

  &.primary {
    background-color: var(--primary-color);
    color: #fff;
  }

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-7px);
  }
`

export const Button = ({ children, color, className }) => {
  return (
    <Layout className={[className, color]}>
      {children}
    </Layout>  
  )
}