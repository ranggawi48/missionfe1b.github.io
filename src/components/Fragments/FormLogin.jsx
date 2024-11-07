import InputForm from "../Elements/Input";
import Navigation from "../Layout/Navigation";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Username"
        name="Username"
        type="email"
        placeholder="Masukkan username"
      />
      <InputForm
        label="Kata sandi"
        name="Kata sandi"
        type="password"
        placeholder="Masukkan kata sandi"
      />
      <Navigation type="login" />
    </form>
  );
};

export default FormLogin;
