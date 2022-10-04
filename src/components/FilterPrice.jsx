const FilterPrice = ({ filterValueSelected }) => {

  const onFilterValueChanged = (e) => {
    filterValueSelected(e.target.value)
  }

  return (
    <>
      <span>Pris&nbsp;</span>
      <select name="price" onChange={onFilterValueChanged}>
        <option value="0">Alla</option>
        <option value="1">250-500</option>
        <option value="2">500-1000</option>
        <option value="3">1000-1500</option>
      </select>
    </>
  )
}

export default FilterPrice