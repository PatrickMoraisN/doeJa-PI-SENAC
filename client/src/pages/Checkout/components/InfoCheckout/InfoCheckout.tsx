import { Localization } from "@/components/Localization/Localization";
import React, { useEffect, useState } from "react";
import * as S from "./InfoCheckout.styles";

interface InfoCheckoutProps {
  totalItensValue: number;
  setShippingCalculated: (value: boolean) => void;
  setError: (value: null) => void;
  error: string | null;
  methodSelected: string | null;
}

export function InfoCheckout({
  setShippingCalculated,
  error,
  setError,
  methodSelected,
}: InfoCheckoutProps) {
  const [shipping, setShipping] = useState(0);

  let total = 0;

  if (methodSelected === "takeaway") {
    total = 0;
  }
  if (methodSelected === "delivery") {
    total = shipping;
  }

  useEffect(() => {
    if (shipping) {
      setError(null);
    }
  }, [shipping]);

  return (
    <S.InfoCheckoutContainer>
      <S.InfoWrapper>
        <Localization
          setShipping={setShipping}
          error={error}
          setShippingCalculated={setShippingCalculated}
          methodSelected={methodSelected}
        />
      </S.InfoWrapper>
      <S.InfoWrapper>
        {!!shipping && (
          <>
            <S.TotalText>Total</S.TotalText>
            <S.TotalText>R$ {total.toFixed(2)}</S.TotalText>
          </>
        )}
        {methodSelected === "takeaway" && (
          <>
            <S.TotalText>Retirada</S.TotalText>
            <S.TotalText>R$ 0,00</S.TotalText>
          </>
        )}
      </S.InfoWrapper>
    </S.InfoCheckoutContainer>
  );
}
