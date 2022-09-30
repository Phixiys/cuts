import SalonItem from './SalonItem.jsx'

// SVG:s
import { ReactComponent as ChevronLeft } from '../assets/svg/icn_chevron_left.svg'
import { ReactComponent as ChevronDown } from '../assets/svg/icn_chevron_down.svg'
import { ReactComponent as Settings } from '../assets/svg/icn_settings.svg'

// Styles
import { NavBar, SubNav, Main } from '../styles/SalonList.styles'

const SalonList = ({}) => {
  return (
    <>
      <NavBar>
        <ChevronLeft />
        <h3>Hår</h3>
        <Settings />
      </NavBar>
      <SubNav>
        <span>Price $25 - $50</span>
        <ChevronDown />
      </SubNav>
      <Main>
        <SalonItem />
      </Main>
    </>
  )
}

export default SalonList