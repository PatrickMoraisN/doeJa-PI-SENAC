import React from "react";
import foodAPI from "@/api";
import * as S from "./NewProduct.styles";
import { Header } from "@/components/Header";
import { toast } from "react-toastify";

export function NewProduct() {
  const [message, setMessage] = React.useState<string | null>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const name = event.currentTarget.elements.namedItem(
        "name"
      ) as HTMLInputElement;
      const description = event.currentTarget.elements.namedItem(
        "description"
      ) as HTMLTextAreaElement;
      const labels = event.currentTarget.elements.namedItem(
        "labels"
      ) as HTMLInputElement;

      const labelsArray = labels.value.split(",").map((label) => label.trim());

      const data = {
        name: name.value,
        description: description.value,
        labels: labelsArray,
      };

      const response = await foodAPI.createFood(data);

      if (response.status !== 200) {
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
        return;
      }

      name.value = "";
      description.value = "";
      labels.value = "";

      toast.success("Produto criado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setMessage("Produto criado com sucesso!");
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
    }
  };

  return (
    <>
      <Header />
      <S.NewProductPageContainer>
        <S.NewProductTitle>Criar Produto</S.NewProductTitle>

        <S.NewProductForm onSubmit={handleSubmit}>
          <S.NewProductInputContainer>
            <label htmlFor="name">Nome</label>
            <S.NewProductInput
              type="text"
              id="name"
              placeholder="Ex: Asa de Frango"
            />
          </S.NewProductInputContainer>

          <S.NewProductInputContainer>
            <label htmlFor="description">Descrição</label>
            <S.NewProductInput
              id="description"
              placeholder="Ex: 500g de Asa de Frango suculenta"
            />
          </S.NewProductInputContainer>

          <S.NewProductInputContainer>
            <label htmlFor="labels">Tags</label>
            <S.NewProductInput
              type="text"
              id="labels"
              placeholder="Ex: Carne, Frio, Proteína"
            />
          </S.NewProductInputContainer>

          <S.CreateProductButton type="submit">
            Criar Produto
          </S.CreateProductButton>
        </S.NewProductForm>

        {message && <p>{message}</p>}
      </S.NewProductPageContainer>
    </>
  );
}
