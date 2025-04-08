export default function Alert(props) {

  const { type, message, children } = props;

  // console.log(type);
  // console.log(message);

  return <div className={type}>{children}</div>
}