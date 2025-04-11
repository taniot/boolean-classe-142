const SelectSearch = ({ value, onChange, children }) => {



  return (<select value={value} onChange={onChange}>
    {children}
  </select>)

}

export default SelectSearch;

