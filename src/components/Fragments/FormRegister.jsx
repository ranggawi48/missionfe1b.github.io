import InputForm from "../Elements/Input";
import Navigation from "../Layout/Navigation";

const FormRegister = () => {
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
      <InputForm
        label="Konfirmasi Kata sandi"
        name="Konfirmasi Kata sandi"
        type="password"
        placeholder="Masukkan kata sandi"
      />
    <Navigation type="register" />
    </form>
  );
};

export default FormRegister;
