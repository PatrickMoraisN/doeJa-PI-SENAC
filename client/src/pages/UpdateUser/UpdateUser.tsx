import { userAPI } from "@/api";
import React, { useContext, useEffect } from "react";
import { UserInfoContext } from "@/contexts/UserInfoContext";
import { useNavigate } from "react-router-dom";
import * as S from "./UpdateUser.styles";
import { Header } from "@/components/Header";
import { toast } from "react-toastify";

export function UpdateUser() {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [message, setMessage] = React.useState<string | null>("");

  const [data, setData] = React.useState<any>({});

  const { userToken } = useContext(UserInfoContext);
  const navigate = useNavigate();

  const getUser = async () => {
    const response = await userAPI.getUser(userToken);

    if (response.status !== 200) {
      setMessage("Alguma coisa deu errado!");
      return;
    }

    setData(response.data);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await userAPI.updateUser(
        {
          name,
          email,
        },
        userToken
      );

      if (response.status !== 200) {
        setMessage("Alguma coisa deu errado!");
        return;
      }

      setName("");
      setEmail("");
      toast("Usuário atualizado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setMessage("Usuário atualizado com sucesso!");
    } catch (error) {
      toast("Alguma coisa deu errado!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setMessage("Alguma coisa deu errado!");
      console.log(error);
    }
  };

  const handleDelete = async () => {
    await userAPI.deleteUser(userToken);

    toast("Usuário deletado com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setMessage("Usuário deletado com sucesso!");

    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  useEffect(() => {
    getUser();
  }, [handleSubmit]);

  return (
    <S.UpdateUserPageContainer>
      <Header />
      <S.ProfileContainer>
        <S.PageTitle>Perfil</S.PageTitle>
        <p>
          Nome: <S.NameSpan>{data.name}</S.NameSpan>
        </p>
        <p>
          Email: <S.EmailSpan>{data.email}</S.EmailSpan>
        </p>
        <p>
          Tipo de Usuário:{" "}
          <S.TypeSpan>{data.isADonor ? "Doador" : "Recebedor"}</S.TypeSpan>
        </p>
      </S.ProfileContainer>

      <S.UpdateProfileContainer>
        <h2>Atualizar Perfil</h2>
        <S.UpdateProfileForm onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Novo Nome</label>
            <S.UpdateProfileInput
              type="text"
              id="name"
              value={name}
              placeholder="Ex: João da Silva"
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Novo Email</label>
            <S.UpdateProfileInput
              type="email"
              id="email"
              value={email}
              placeholder="Ex: joaodasilva@email.com"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <S.UpdateProfileButton type="submit">Update</S.UpdateProfileButton>
        </S.UpdateProfileForm>
      </S.UpdateProfileContainer>

      {message && <p>{message}</p>}

      <hr />

      <S.DeleteProfileButton onClick={handleDelete}>
        Deletar perfil
      </S.DeleteProfileButton>
    </S.UpdateUserPageContainer>
  );
}
