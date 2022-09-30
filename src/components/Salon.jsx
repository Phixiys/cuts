// SVG:s
import { ReactComponent as Star } from '../assets/svg/icn_star_filled_small.svg'
import { ReactComponent as EmptyStar } from '../assets/svg/icn_star_empty_small.svg'

const Salon = ({}) => {
  return (
    <>
      <div>12.00</div>
      <div>
        <h3>Sax & Son</h3>
        <div>
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <EmptyStar />
          </div>
          <div>(12)</div>
        </div>
        <p>High Street 46</p>
      </div>
    </>
  )
}

export default Salon