import React, { useContext, useEffect } from "react";
import { ShoppingCart } from "phosphor-react";
import * as S from "./Card.styles";
import { FoodsListProps } from "@/api/products/mocks";
import { useNavigate } from "react-router-dom";
import { AmountFood } from "@/components/AmountFood/AmountFood";
import { UserInfoContext } from "@/contexts/UserInfoContext";
import { userAPI } from "@/api";
import { HandHeart } from "@phosphor-icons/react";

type CardProps = {
  coffeeList: FoodsListProps;
};

export function Card({ coffeeList }: CardProps) {
  const navigate = useNavigate();

  console.log("eeee" + coffeeList);

  const [userInfo, setUserInfo] = React.useState<any>({});

  const { userToken } = useContext(UserInfoContext);

  const getUserInfo = async () => {
    const resp = await userAPI.getUser(userToken);
    if (resp.status === 200) {
      setUserInfo(resp.data);
    }
  };

  const handleCartClick = () => navigate("/checkout");

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      {coffeeList.map((coffee) => (
        <S.Card key={coffee.name}>
          {coffee.hasOwnProperty("src") ? (
            <img src={coffee.src} />
          ) : (
            <div>
              <HandHeart size={100} color="#030303" weight="fill" />
            </div>
          )}

          <S.TagContainer>
            {coffee.labels.map((label) => (
              <S.Tag key={label}>{label}</S.Tag>
            ))}
          </S.TagContainer>
          <S.CoffeeName>{coffee.name}</S.CoffeeName>
          <S.CoffeeDesc>{coffee.description}</S.CoffeeDesc>

          {!userInfo.isADonor && (
            <S.CoffeeFooter>
              <AmountFood food={coffee} />
              <S.CartBtn onClick={handleCartClick}>
                <ShoppingCart color="#FFF" weight="fill" />
              </S.CartBtn>
            </S.CoffeeFooter>
          )}
        </S.Card>
      ))}
    </>
  );
}
