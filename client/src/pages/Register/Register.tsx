import { userAPI } from "@/api";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import * as S from "./Register.styles";
import { toast } from "react-toastify";
import { HandHeart } from "@phosphor-icons/react";

export function Register() {
  const [emailCa, setEmailCa] = useState("");
  const [passCa, setPassCa] = useState("");
  const [nameCa, setNameCa] = useState("");
  const [isADonor, setIsADonor] = useState<boolean | string>("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleCreateUser = async () => {
    const data = { email: emailCa, password: passCa, name: nameCa, isADonor };

    data.isADonor = data.isADonor === "isADonor" ? true : false;

    if (
      data.isADonor === "" ||
      data.isADonor === undefined ||
      isADonor === ""
    ) {
      setError("Selecione se você quer doar ou receber");
      return;
    }

    const resp = await userAPI.createUser(data);

    if (resp.status === 200) {
      toast.success("Usuário criado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    } else {
      setError("Algo deu errado!");
    }
  };

  const handleClick = (isADonor: string) => {
    setIsADonor(isADonor);
  };

  return (
    <S.RegisterPageContainer>
      <S.ImageContainer>
        <S.Image src="src/assets/register.jpg" alt="logo" />
      </S.ImageContainer>

      <S.RegisterContainer>
        <h1>Doe já</h1>
        <HandHeart size={140} color="red" />
        <S.RegisterFormContainer>
          <h3>Crie sua Conta</h3>
          <S.RegisterInput
            type="email"
            placeholder="email"
            required
            onChange={(e) => setEmailCa(e.target.value)}
          />
          <S.RegisterInput
            type="text"
            placeholder="nome"
            required
            onChange={(e) => setNameCa(e.target.value)}
          />
          <S.RegisterInput
            type="password"
            placeholder="senha"
            required
            onChange={(e) => setPassCa(e.target.value)}
          />
          <S.TypeOfUserContainer>
            <S.DonorButton
              onClick={() => handleClick("isADonor")}
              isADonor={isADonor}
            >
              Quero Doar
            </S.DonorButton>
            <S.RecipientButton
              onClick={() => handleClick("isntADonor")}
              isADonor={isADonor}
            >
              Quero Receber
            </S.RecipientButton>
          </S.TypeOfUserContainer>
          <S.RegisterButton onClick={handleCreateUser}>
            Criar Conta
          </S.RegisterButton>
        </S.RegisterFormContainer>
        {error && <S.ErrorContainer>{error}</S.ErrorContainer>}
        <p>
          Já tem conta? <NavLink to="/login">Faça Login</NavLink>
        </p>
      </S.RegisterContainer>
    </S.RegisterPageContainer>
  );
}
