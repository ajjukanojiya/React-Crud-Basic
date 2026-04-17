function Input({ label, type = "text", placeholder ,value, onChange, name }) {

 // console.log('aaa',onChange);
  return (
    <div className="input-group">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} />
      {/* error yahan tum baad me add karoge */}
    </div>
  );
}

export default Input;