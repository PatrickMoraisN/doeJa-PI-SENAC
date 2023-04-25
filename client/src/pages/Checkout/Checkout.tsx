import { Header } from "@/components/Header";
import * as S from "./Checkout.styles";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FoodCartContext } from "@/contexts/FoodCartContext";
import { Alien } from "phosphor-react";
import { DeliveryForm, InfoCheckout, RemoveBtn } from "./components";
import { AmountFood } from "@/components";
import { UserInfoContext } from "@/contexts/UserInfoContext";
import { HandHeart } from "@phosphor-icons/react";
import { enumAddress } from "@/api/shipping";

export function Checkout() {
  const [methodSelected, setMethodSelected] = useState<null | string>(null);
  const [isDeliveryFormCompleted, setDeliveryFormCompleted] = useState(false);
  const [isShippingCalculated, setShippingCalculated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { cart } = useContext(FoodCartContext);
  const { setUserInfo } = useContext(UserInfoContext);

  const navigate = useNavigate();

  const handleConfirmDelivery = () => {
    if (methodSelected === "takeaway") {
      navigate("/confirmation");
      return;
    }

    if (!isDeliveryFormCompleted || !methodSelected) {
      setError("O Formulário não está completo! Revise os dados.");
      return;
    }

    if (!isShippingCalculated) {
      setError("O Frete não está calculado");
      return;
    }

    navigate("/confirmation");
  };

  useEffect(() => {
    if (methodSelected) {
      setUserInfo((state: any) => ({
        ...state,
        paymentMethod: methodSelected,
      }));
    }
  }, [methodSelected]);

  return (
    <S.Main>
      <Header />

      {cart.foods.length ? (
        <S.ContentWrapper>
          <section>
            <h2>Complete seu pedido</h2>

            <S.PaymentContent>
              {methodSelected === "delivery" && (
                <S.DeliveryContent>
                  <DeliveryForm
                    setDeliveryFormCompleted={setDeliveryFormCompleted}
                    setError={setError}
                  />
                </S.DeliveryContent>
              )}

              {methodSelected === "takeaway" && (
                <S.TakeawayContent>
                  <h3>Retirar no local</h3>
                  <p>
                    Você pode retirar seu pedido no local: {enumAddress.Street}
                  </p>
                </S.TakeawayContent>
              )}

              <S.MethodContent>
                <h3>Método de Recebimento</h3>
                <p>
                  Você pode:
                  <S.DeliveryMethodUl>
                    <li>Retirar no local</li>
                    <li>Receber em casa</li>
                  </S.DeliveryMethodUl>
                </p>

                <S.Methods>
                  <S.ButtonMethod
                    onClick={() => setMethodSelected("delivery")}
                    selected={methodSelected === "delivery"}
                  >
                    RECEBER EM CASA
                  </S.ButtonMethod>
                  <S.ButtonMethod
                    onClick={() => setMethodSelected("takeaway")}
                    selected={methodSelected === "takeaway"}
                  >
                    RETIRAR NO LOCAL
                  </S.ButtonMethod>
                </S.Methods>
              </S.MethodContent>
            </S.PaymentContent>
          </section>

          <section>
            <h2>Comidas selecionadas</h2>

            <S.SelectedCoffees>
              {cart.foods.map((coffee) => (
                <S.CoffeeCard key={coffee.name}>
                  {coffee.hasOwnProperty("src") ? (
                    <img src={coffee.src} alt={coffee.name} />
                  ) : (
                    <HandHeart size={52} color="#030303" weight="fill" />
                  )}

                  <S.CoffeeCardTitle>
                    <p>{coffee.name}</p>
                    <div>
                      <AmountFood food={coffee} />
                      <RemoveBtn coffee={coffee} />
                    </div>
                  </S.CoffeeCardTitle>

                  <p>x {coffee.amount}</p>
                </S.CoffeeCard>
              ))}

              <InfoCheckout
                setShippingCalculated={setShippingCalculated}
                error={error}
                setError={setError}
                methodSelected={methodSelected}
              />
              <S.ConfirmButton onClick={handleConfirmDelivery}>
                CONFIRMAR PEDIDO
              </S.ConfirmButton>
              {error && (
                <S.ErrorMsg>
                  {"->"} {error}
                </S.ErrorMsg>
              )}
            </S.SelectedCoffees>
          </section>
        </S.ContentWrapper>
      ) : (
        <S.ContentWrapper>
          <S.EmptyCheckoutWrapper>
            <Alien size={52} color="#030303" weight="fill" />
            <h2>Seu Carrinho está vazio!</h2>
          </S.EmptyCheckoutWrapper>
        </S.ContentWrapper>
      )}
    </S.Main>
  );
}
