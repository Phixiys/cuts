import styled from 'styled-components'

export const Hero = styled.div`
  position: relative;
  background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${props => props.image});
  background-size: cover;
  background-position: center;
  height: 30vh;

  .chevron-left {
    position: absolute;
    top: 2rem;
    left: 2rem;
    cursor: pointer;
  }

  .heart {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`

export const Title = styled.h3`
  font-family: var(--MillerBanner);
  font-weight: 300;
  position: absolute;
  bottom: 4rem;
  left: 2rem;
  color: var(--White);
`

export const StarsWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Rating = styled.p`
  font-family: var(--Helvetica);
  color: var(--White);
  font-size: 1.2rem;
  padding-left: 1rem;
`

export const SubMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--Husk);
  `

  export const Schema = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.2px solid var(--Gainsboro);
`

export const InfoWrapper = styled.div`
  font-family: var(--Helvetica);
  font-weight: 300;
  padding: 1rem;
`

export const AdressWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 0.2px solid var(--WhiteSmoke);

  svg {
    margin-right: 1rem;
  }
  `

  export const HoursWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 0.2px solid var(--WhiteSmoke);

  svg {
    margin-right: 1rem;
  }
  `

  export const HoursFlex = styled.div`
  display: flex;
  align-items: center;
  `

  export const OpenHours = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  `

  export const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 0.2px solid var(--WhiteSmoke);

  svg {
    margin-right: 1rem;
  }
  `

  export const UrlWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 0.2px solid var(--WhiteSmoke);

    svg {
      margin-right: 1rem;
    }
  `

  export const InfosWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`

export const About = styled.div`
  padding: 1rem 0;
`