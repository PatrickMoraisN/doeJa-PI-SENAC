import { createContext, ReactNode, useState } from "react";

type UserInfoProps = {
  street: string;
  city: string;
  uf: string;
  neighb: string;
  paymentMethod: string;
};

interface UserTokenJWT {
  token: string;
}

interface UserInfoContextProps {
  userInfo: UserInfoProps | {} | any;
  userToken: any;
  setUserInfo: (value: any) => void;
  setUserToken: (value: any) => void;
}

interface UserInfoContextProviderProps {
  children: ReactNode;
}

export const UserInfoContext = createContext({} as UserInfoContextProps);

export function UserInfoContextProvider({
  children,
}: UserInfoContextProviderProps) {
  const [userInfo, setUserInfo] = useState<UserInfoProps | {}>({});
  const [userToken, setUserToken] = useState<UserTokenJWT | {}>({});
  console.log(userInfo);

  return (
    <UserInfoContext.Provider
      value={{ userInfo, setUserInfo, userToken, setUserToken }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}
