import { enumAddress } from "@/api/shipping";
import { Header } from "@/components/Header";
import { UserInfoContext } from "@/contexts/UserInfoContext";
import { GithubLogo } from "phosphor-react";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Confirmation.styles";

type PaymentMethodProps = "credito" | "debito" | "dinheiro";

export function Confirmation() {
  const { userInfo } = useContext(UserInfoContext);

  const navigate = useNavigate();

  const getPaymentMessage = (paymentMethod: PaymentMethodProps) => {
    if (paymentMethod === "credito") return <span>Cartão de Crédito</span>;
    if (paymentMethod === "debito") return <span>Cartão de Débito</span>;
    if (paymentMethod === "dinheiro") return <span>Dinheiro</span>;
  };

  useEffect(() => {
    if (!Object.values(userInfo).length) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Header />
      <S.ContentWrapper>
        <div>
          <S.ConfirmationText>Uhu! Pedido confirmado</S.ConfirmationText>
          {userInfo.paymentMethod === "delivery" ? (
            <p>Seu pedido chegará em 20 - 30 minutos, em {userInfo.street}</p>
          ) : (
            <p>Seu pedido estará pronto em 20 - 30 minutos</p>
          )}
        </div>

        <S.Confirmation>
          <div>
            <div>
              {userInfo.paymentMethod === "delivery" ? (
                <div>
                  <p style={{ fontWeight: "bold" }}>
                    Entrega em {userInfo.street}
                  </p>
                  <p>
                    {userInfo.neighb} - {userInfo.city}, {userInfo.uf}
                  </p>
                </div>
              ) : (
                <div>
                  <p style={{ fontWeight: "bold" }}>
                    Retirada em{" "}
                    <span style={{ textDecoration: "underline" }}>
                      {enumAddress.Street}
                    </span>
                  </p>
                </div>
              )}
            </div>
            <br></br>

            <div>
              {userInfo.paymentMethod === "delivery" ? (
                <div>
                  <p style={{ fontWeight: "bold" }}>Previsão de entrega</p>
                  <p>20 min - 30 min </p>
                </div>
              ) : (
                <div>
                  <p style={{ fontWeight: "bold" }}>Pedido sendo preparado</p>
                  <p>20 min - 30 min </p>
                </div>
              )}
            </div>
            <br></br>

            <div>
              <p style={{ fontWeight: "bold" }}>Tipo de Recebimento</p>
              {userInfo.paymentMethod === "delivery" ? (
                <div>
                  <p>Entrega na casa do Usuário</p>
                </div>
              ) : (
                <p>Retirada no local</p>
              )}
            </div>
            <br></br>
          </div>
        </S.Confirmation>
        <br></br>
        <br></br>

        <h3>Grupo Projeto Integrador - SENAC</h3>
        <S.AuthorsContainer>
          <a
            href="https://github.com/PatrickMoraisN"
            target="_blank"
            rel="noreferrer"
          >
            <S.Author>
              <GithubLogo size={32} color="#FFF" />
              Patrick Morais
            </S.Author>
          </a>

          <a
            href="https://github.com/LEANDRO-DV"
            target="_blank"
            rel="noreferrer"
          >
            <S.Author>
              <GithubLogo size={32} color="#FFF" />
              Leandro Lopes
            </S.Author>
          </a>

          <a
            href="https://github.com/Miguel-Lima"
            target="_blank"
            rel="noreferrer"
          >
            <S.Author>
              <GithubLogo size={32} color="#FFF" />
              Miguel Oliveira
            </S.Author>
          </a>

          <a
            href="https://github.com/PatrickMoraisN"
            target="_blank"
            rel="noreferrer"
          >
            <S.Author>
              <GithubLogo size={32} color="#FFF" />
              Roberto Santuche
            </S.Author>
          </a>

          <a
            href="https://github.com/PatrickMoraisN"
            target="_blank"
            rel="noreferrer"
          >
            <S.Author>
              <GithubLogo size={32} color="#FFF" />
              Larissa Peixinho
            </S.Author>
          </a>

          <a
            href="https://github.com/PatrickMoraisN"
            target="_blank"
            rel="noreferrer"
          >
            <S.Author>
              <GithubLogo size={32} color="#FFF" />
              Jorge Dias
            </S.Author>
          </a>

          <a
            href="https://github.com/PatrickMoraisN"
            target="_blank"
            rel="noreferrer"
          >
            <S.Author>
              <GithubLogo size={32} color="#FFF" />
              Lucas Nicotari
            </S.Author>
          </a>
        </S.AuthorsContainer>
      </S.ContentWrapper>
    </>
  );
}
