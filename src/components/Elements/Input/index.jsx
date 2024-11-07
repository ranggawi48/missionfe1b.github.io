import Label from "./Label";
import Input from "./Input";
import InputPassword from "./InputPassword"; // Import InputPassword component

const InputForm = (props) => {
  const { label, name, type, placeholder } = props;

  return (
    <div className="input">
      <Label htmlFor={name}>{label}</Label>
      {type === "password" ? (
        <InputPassword name={name} placeholder={placeholder} />
      ) : (
        <Input name={name} type={type} placeholder={placeholder} />
      )}
    </div>
  );
};

export default InputForm;
