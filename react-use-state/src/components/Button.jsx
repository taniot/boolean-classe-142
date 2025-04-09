const Button = ({ title, isSelected, onSelect }) => {

  return (<button className={isSelected ? 'btn selected' : 'btn'} onClick={onSelect}>{title}</button>)

}



export default Button;
