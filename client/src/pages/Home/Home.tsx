import React, { useContext, useEffect, useState } from "react";
import { Header } from "@/components/Header";
import Delivery from "@/assets/delivery.svg";
import FoodBanner from "@/assets/foodBanner.svg";
import * as S from "./Home.styles";
import foodAPI from "@/api";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "@/contexts/UserInfoContext";
import { Card } from "./components/Card";
import { FoodsListProps } from "@/api/products/mocks";
import { Coffee, MapPinLine, Package, ShoppingCart, Timer } from "phosphor-react";
import { HandHeart, Truck } from "@phosphor-icons/react";

export function Home() {
  const [coffeeList, setCoffeeList] = useState([]);
  const { userToken } = useContext(UserInfoContext);
  const navigate = useNavigate();

  const getFoods = async () => {
    const coffees = await foodAPI.getFoods2();
    setCoffeeList(coffees);
  };

  const verifyUserSession = () => {
    if (Object.keys(userToken).length === 0) {
      navigate("/login");
    }
  };

  useEffect(() => {
    getFoods();
    verifyUserSession();
  }, [userToken]);

  return (
    <S.main>
      <Header />
      <S.IntroContainer>
        <S.IntroWrapper>
          <S.IntroText>
            <div>
              <h1>
              Ajude a alimentar quem precisa!
              </h1>
              <br></br>
              <p>
                Um ato simples de doação pode mudar o mundo. Faça a diferença na vida de alguém
              </p>
            </div>
            <S.ItemsContainer>
              <div>
                <HandHeart size={32} color="#030303" weight="fill" />
                <p>Seja um doador</p>
              </div>

              <div>
                <ShoppingCart size={17} color="#030303" weight="fill" />
                <p>Escolha os alimentos</p>
              </div>

              <div>
                <MapPinLine size={32} color="#030303" weight="fill" />
                <p>Retire em uma unidade</p>
              </div>

              <div>
                <Truck size={32} color="#030303" weight="fill" />
                <p>Receba em casa</p>
              </div>
            </S.ItemsContainer>
          </S.IntroText>

          <img src={FoodBanner} />
        </S.IntroWrapper>
      </S.IntroContainer>

      <S.OurCoffees>
        <h2>Produtos sendo Doados</h2>
      </S.OurCoffees>

      <S.CoffeesListWrapper>
        <Card coffeeList={coffeeList} />
      </S.CoffeesListWrapper>
    </S.main>
  );
}
