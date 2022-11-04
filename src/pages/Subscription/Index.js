import React from "react";
import * as S from "./SubscriptionStyles";
import { subscriptionData } from "../../data/SubscriptionData/subscriptionData";
import img1 from "./Images/tick.png";
import { Button } from "../../components/Button";

export const Subscription = () => {
  return (
    <S.Container>
      <S.Subscriptions>
        {subscriptionData.map((subscription, i) => (
          <S.Subscription key={i}>
            <span>{subscription.name}</span>
            <span>$ {subscription.price}</span>

            <S.Features>
              {subscription.features.map((feature, i) => (
                <S.Feature>
                  <S.Images src={img1} alt=""></S.Images>
                  <span key={i}>{feature}</span>
                </S.Feature>
              ))}
            </S.Features>

            <Button>Join Now</Button>
          </S.Subscription>
        ))}
      </S.Subscriptions>
    </S.Container>
  );
};

export default Subscription;
