const Button = ({ message, fn }) => {
  return <button onClick={() => fn()}>{message}</button>
}

export default Button;