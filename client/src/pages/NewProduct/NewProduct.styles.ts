import styled from "styled-components";

export const NewProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const NewProductPageContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 100vh;
  gap: 8rem;
`;

export const NewProductForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: ${(props) => props.theme["gray-100"]};
  padding: 32px;
  border-radius: 8px;
  width: 600px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

  p {
    align-self: flex-start;
    font-size: 16px;
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const NewProductInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  border: 1px solid ${(props) => props.theme["gray-300"]};
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme["purple-100"]};
  }
`;

export const NewProductInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const CreateProductButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme["green-300"]};
  color: ${(props) => props.theme["white"]};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;
