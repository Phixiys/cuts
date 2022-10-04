import { ReactComponent as Star } from '../assets/svg/icn_star_filled_small.svg'
import { ReactComponent as EmptyStar } from '../assets/svg/icn_star_empty_small.svg'

const Stars = ({ starsCount }) => {
  let stars = []
  for (let i = 0; i < starsCount; i++) {
    stars.push(<Star key={i} />)
  }
  for (let i = 0; i < 5 - starsCount; i++) {
    stars.push(<EmptyStar key={i + stars} />)
  }

  return (
    <div>
      {stars}
    </div>
  )
}

export default Stars