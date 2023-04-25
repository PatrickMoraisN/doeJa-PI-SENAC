import { userAPI } from "@/api";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "@/contexts/UserInfoContext";
import * as S from "./Login.styles";
import { HandHeart } from "@phosphor-icons/react";

export function Login() {
  const [emailLo, setEmailLo] = useState("");
  const [passLo, setPassLo] = useState("");
  const navigate = useNavigate();

  const { setUserToken } = useContext(UserInfoContext);

  const handleClick = async () => {
    const data = { email: emailLo, password: passLo };

    const resp = await userAPI.createSession(data);

    if (resp.status === 200) {
      setUserToken(resp.data.token);
      navigate("/");
    }
  };

  return (
    <S.LoginPageContainer>
      <S.LoginImageContainer>
        <S.Image src="src/assets/login.jpg" alt="logo" />
      </S.LoginImageContainer>

      <S.LoginContainer>
        <S.LoginTitle>Doe Já</S.LoginTitle>
        <HandHeart size={140} color="red" />
        <S.LoginCard>
          <S.LoginInput
            type="email"
            placeholder="email"
            onChange={(e) => setEmailLo(e.target.value)}
          />
          <S.LoginInput
            type="password"
            placeholder="senha"
            onChange={(e) => setPassLo(e.target.value)}
          />
          <S.LoginButton onClick={handleClick}>LOGIN</S.LoginButton>
        </S.LoginCard>

        <div>
          Ainda não tem conta? <NavLink to="/register">Crie uma</NavLink>
        </div>
      </S.LoginContainer>
    </S.LoginPageContainer>
  );
}
