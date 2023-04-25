import styled from "styled-components";

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme["purple-500"]};
  margin-bottom: 20px;
`;

export const UpdateUserPageContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: ${(props) => props.theme["gray-100"]};
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

  P {
    align-self: flex-start;
    font-size: 16px;
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const UpdateProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: ${(props) => props.theme["gray-100"]};
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

  p {
    align-self: flex-start;
    font-size: 16px;
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const NameSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: ${(props) => props.theme["purple-100"]};
  border-radius: 6px;
  padding: 8px;
`;

export const EmailSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: ${(props) => props.theme["purple-100"]};
  border-radius: 6px;
  padding: 8px;
`;

export const TypeSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: ${(props) => props.theme["purple-100"]};
  border-radius: 6px;
  padding: 8px;
`;

export const UpdateProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const UpdateProfileInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border: 1px solid ${(props) => props.theme["gray-300"]};
  border-radius: 8px;
  background-color: ;
  color: ${(props) => props.theme["gray-500"]};
  font-size: 16px;
  font-weight: 400;
  transition: border-color 0.2s;

  &:focus {
    background: #f2f2f2;
  }
`;

export const UpdateProfileButton = styled.button`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border: none;

  border-radius: 8px;
  background-color: ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["white"]};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const DeleteProfileButton = styled.button`
  margin: 0 auto;
  width: 50%;
  height: 40px;
  padding: 0 16px;
  border: none;

  border-radius: 8px;
  background-color: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme["white"]};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;
