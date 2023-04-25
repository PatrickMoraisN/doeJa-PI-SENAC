import styled from "styled-components";

export const RegisterPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  flex: 1;
  height: 100vh;
  overflow: hidden;
`;

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
  flex: 1;
  background-color: #f1f1f1;
`;

export const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TypeOfUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

interface TypeOfUserButtonProps {
  isADonor: string | boolean;
}

export const TypeOfUserButton = styled.button<TypeOfUserButtonProps>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #d3d3d3;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #c9c9c9;
  }
`;

export const DonorButton = styled(TypeOfUserButton)`
  background-color: ${(props) =>
    props.isADonor === "isADonor" ? "#7F7F7F" : "#D3D3D3;"};
`;

export const RecipientButton = styled(TypeOfUserButton)`
  background-color: ${(props) =>
    props.isADonor === "isntADonor" ? "#7F7F7F" : "#D3D3D3;"};
`;

export const RegisterInput = styled.input`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #f1f1f1;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    background-color: #fff;
  }
`;

export const RegisterButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #1db954;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #1ed760;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #ff0000;
  font-size: 0.8rem;
`;
