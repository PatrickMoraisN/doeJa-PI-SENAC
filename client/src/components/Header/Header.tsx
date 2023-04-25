import React, { useContext, useEffect } from "react";
import * as S from "./Header.styles";
import logo from "@/assets/veganese.svg";
import { MapPin, ShoppingCart, SignOut } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { FoodCart, FoodCartContext } from "@/contexts/FoodCartContext";
import { UserInfoContext } from "@/contexts/UserInfoContext";
import { userAPI } from "@/api";
import { HandHeart } from "@phosphor-icons/react";

export function Header() {
  const [userInfo, setUserInfo] = React.useState<any>({});

  const { cart } = useContext(FoodCartContext);
  const { userToken } = useContext(UserInfoContext);

  const getUserInfo = async () => {
    const resp = await userAPI.getUser(userToken);
    if (resp.status === 200) {
      setUserInfo(resp.data);
    }
  };

  const getTotalQuantityOnCart = (coffees: FoodCart[]) => {
    const totalQuantity = coffees.reduce((acc, curr) => {
      return acc + curr.amount!;
    }, 0);
    return totalQuantity;
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <S.HeaderContainer>
      <NavLink to="/" data-testid="logo">
        <HandHeart size={62} color="red" />
      </NavLink>

      <S.Location>
        <MapPin size={18} color="#4776f8" weight="fill" />
        SENAC
      </S.Location>

      <S.HeaderText>Doe Já</S.HeaderText>

      <S.CartContainer>
        <S.ProfileHeaderContainer to="/update-user" data-testid="logo">
          <S.DivFirstLetter>
            {userInfo.name && userInfo.name[0].toUpperCase()}
          </S.DivFirstLetter>
          {userInfo.name && userInfo.name}
        </S.ProfileHeaderContainer>

        {userInfo.isADonor ? (
          <S.DonateButton to="/new-product" data-testid="logo">
            <HandHeart size={32} color="#030303" />
            Doar
          </S.DonateButton>
        ) : (
          <NavLink to="/checkout">
            <S.Cart data-testid="cart">
              {!!cart.foods.length && (
                <span>{getTotalQuantityOnCart(cart.foods)}</span>
              )}
              <ShoppingCart size={18} color="#C47F17" weight="fill" />
            </S.Cart>
          </NavLink>
        )}

        <S.LogoutButton to="/login">
          <SignOut size={22} color="white" />
          logout
        </S.LogoutButton>
      </S.CartContainer>
    </S.HeaderContainer>
  );
}
