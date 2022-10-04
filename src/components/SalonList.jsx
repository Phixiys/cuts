import Stars from './Stars'
import { ReactComponent as ChevronRight } from '../assets/svg/icn_chevron_right.svg'
import { SalonListContainer, Time, Title, Info, Adress, TimeDuration, Cost, BorderBottom, SalonListWrapper, OpenHoursWrapper, StarRatingCount, Count, InfoWrapper, CostDurationWrapper, CostWrapper } from '../styles/SalonList.styles'

const SalonList = ({ salonList, onCallback }) => {

  const handleClick = (id) => {
    onCallback(id)
  }

  return (
    <>
      {salonList.map(salon => {
        return (
          <SalonListContainer onClick={() => handleClick(salon.id)} key={salon.id}>
            <SalonListWrapper>
              <OpenHoursWrapper>
                <Time>{salon.openHours}.00</Time>
              </OpenHoursWrapper>
              <InfoWrapper>
                <Title>{salon.name}</Title>
                <Info>
                  <StarRatingCount>
                    <Stars starsCount={salon.stars} className="stars" />
                    <Count>({salon.ratingCount})</Count>
                  </StarRatingCount>
                </Info>
                <Adress>{salon.adress}</Adress>
              </InfoWrapper>
              <CostDurationWrapper>
                <Cost>{salon.price}&nbsp;SEK</Cost>
                <CostWrapper>
                  <TimeDuration>{salon.duration}&nbsp;min</TimeDuration>
                  <ChevronRight />
                </CostWrapper>
              </CostDurationWrapper>
            </SalonListWrapper>
            <BorderBottom />
          </SalonListContainer>
        )
      })}
    </>
  )
}

export default SalonList