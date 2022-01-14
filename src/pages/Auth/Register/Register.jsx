import { Link } from "react-router-dom";
import { Button } from "../../../assets/styles/utils";
import InputText from "../../../components/InputText/InputText";
import { path } from "../../../constants/path";
import * as S from "./Register.style";
import InputPassWord from "./../../../components/InputPassWord/InputPassWord";

const Register = () => {
  return (
    <>
      <S.StyledRegister>
        <S.Container className="container">
          <S.Banner></S.Banner>
          <S.FormWrapper>
            <S.FormTitle>Đăng ký</S.FormTitle>
            <S.Form noValidate>
              <S.FormControl>
                <InputText type="email" name="email" placeholder="Email" />
              </S.FormControl>
              <S.FormControl>
                <InputPassWord placeholder="Mật khẩu" name="password" />
              </S.FormControl>
              <S.FormControl>
                <InputPassWord
                  placeholder="Nhập lại Mật khẩu"
                  name="confirmedPassword"
                />
              </S.FormControl>
              <S.FormButton>
                <Button type="submit">Đăng ký</Button>
              </S.FormButton>
            </S.Form>
            <S.FormFooter>
              <span>Bạn đã có tài khoản</span>
              <Link to={path.login} className="link">
                Đăng nhập
              </Link>
            </S.FormFooter>
          </S.FormWrapper>
        </S.Container>
      </S.StyledRegister>
    </>
  );
};

export default Register;
