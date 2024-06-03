const Input = ({label,type,id}) => {
  return (
    <div className= "mb-4">
      <label htmlFor={id}>{label}</label>
      <input type={type} id = {id} name={id} autoComplete="off"/>
    </div>
  );
}
export default Input
