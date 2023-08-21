import Input from './Input'
import Label from './Label'
export const InputForm = ({ type, label, placeholder, name}) => {
  return (
    <div className="mb-6">
      <Label htmlfor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name}/>
    </div>
  );
};


export default InputForm;