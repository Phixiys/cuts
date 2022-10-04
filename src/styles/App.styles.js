import styled from 'styled-components';

export const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const SalonListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  border-bottom: 0.5px solid var(--Husk);
  `

export const SubNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--Helvetica);
  padding: 1.5rem 1rem;
  font-weight: 300;
  border-bottom: 0.5px solid var(--Husk);
`