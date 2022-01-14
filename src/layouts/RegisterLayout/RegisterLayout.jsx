import HeaderRegister from "./../../components/HeaderRegister/HeaderRegister";
import Footer from "./../../components/Footer/Footer";

const RegisterLayout = ({ children, title }) => {
  return (
    <>
      <HeaderRegister title={title} />
      {children}
      <Footer />
    </>
  );
};

export default RegisterLayout;
