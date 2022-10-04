import { useState } from 'react'
import FilterPrice from "./components/FilterPrice"
import SalonList from './components/SalonList'
import Salon from './components/Salon'
import { ReactComponent as ChevronLeft } from './assets/svg/icn_chevron_left.svg'
import { ReactComponent as ChevronDown } from './assets/svg/icn_chevron_down.svg'
import { ReactComponent as Settings } from './assets/svg/icn_settings.svg'
import Salons from './salons.json'
import { AppWrapper, SalonListWrapper, NavBar, SubNav } from './styles/App.styles'

const App = () => {
  const [state, setState] = useState(Salons)
  const [price, setPrice] = useState('0')
  const [pageId, setPageId] = useState()

  const filteredList = state.filter(salon => {
    if (price === '0')
      return salon
    else if (price === '1')
      return salon.price >= 250 && salon.price <= 500
    else if (price === '2')
      return salon.price >= 500 && salon.price <= 1000
    else if (price === '3')
      return salon.price >= 1000 && salon.price <= 1500
  })

  const onFilterValueChanged = (filterValue) => {
    setPrice(filterValue)
  }

  const onCallback = (id) => {
    setPageId(id)
  }

  return (
    <AppWrapper>
      {typeof pageId === 'number' ?
        <Salon state={state} onCallback={onCallback} id={pageId} /> :
      (
        <>
          <NavBar>
            <ChevronLeft onClick={() => onCallback('')} />
            <h3>Hår</h3>
            <Settings />
          </NavBar>
          <SubNav>
            <FilterPrice filterValueSelected={onFilterValueChanged} />
            <ChevronDown />
          </SubNav>
          <SalonListWrapper>
            <SalonList salonList={filteredList} onCallback={onCallback} />
          </SalonListWrapper>
        </>
      )}
    </AppWrapper>
  )
}

export default App
