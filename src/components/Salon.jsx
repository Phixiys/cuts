import Stars from './Stars'
import { ReactComponent as ChevronLeft } from '../assets/svg/icn_chevron_left_white.svg'
import { ReactComponent as ChevronDown } from '../assets/svg/icn_chevron_down.svg'
import { ReactComponent as Heart } from '../assets/svg/icn_heart.svg'
import { ReactComponent as Adress } from '../assets/svg/icn_address.svg'
import { ReactComponent as Hours } from '../assets/svg/icn_hours.svg'
import { ReactComponent as Phone } from '../assets/svg/icn_phone.svg'
import { ReactComponent as Url } from '../assets/svg/icn_website.svg'
import { Hero, Rating, StarsWrapper, SubMenu, Title, Info, Schema, InfoWrapper, AdressWrapper, HoursWrapper, PhoneWrapper, UrlWrapper, About, HoursFlex } from '../styles/Salon.styles'

const Salon = ({ state, onCallback, id }) => {

  const handleClick = () => {
    onCallback('')
  }

  return (
    <>
      <Hero image={state[`${id}`].image} >
        <ChevronLeft onClick={() => handleClick()} className="chevron-left" />
        <Heart className="heart" />
        <Title>{state[`${id}`].name}</Title>
        <StarsWrapper>
          <Stars starsCount={state[`${id}`].stars} className="stars" />
          <Rating>({state[`${id}`].ratingCount})</Rating>
        </StarsWrapper>
      </Hero>
      <SubMenu>
        <Info>Info</Info>
        <Schema>Schema</Schema>
      </SubMenu>
        <InfoWrapper>
          <AdressWrapper>
            <Adress />
            {state[`${id}`].adress}
          </AdressWrapper>
          <HoursWrapper>
            <HoursFlex>
              <Hours />
              <p>Öppet till {state[`${id}`].openHours}.00</p>
            </HoursFlex>
            <ChevronDown />
          </HoursWrapper>
          <PhoneWrapper>
            <Phone />
            {state[`${id}`].phoneNumber}
          </PhoneWrapper>
          <UrlWrapper>
            <Url />
            {state[`${id}`].linkUrl}
          </UrlWrapper>
          <About>
            {state[`${id}`].about}
          </About>
        </InfoWrapper>
    </>
  )
}

export default Salon