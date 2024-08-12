import React, { useState } from "react";
import Header from "@/src/components/ChefRequest/Header";
import ChefInfo, {
  ChefInfoFormData,
} from "@/src/components/ChefRequest/ChefInfo";
import OrderInfoNearChef, {
  OrderInfoNearChefFormData,
} from "@/src/components/ChefRequest/OrderInfoNearChef";
import OrderInfoPersonalChef, {
  OrderInfoPersonalChefFormData,
} from "@/src/components/ChefRequest/OrderInfoPersonalChef";
import MenuRegistration from "@/src/components/ChefRequest/MenuRegistration";

const ChefRequest = () => {
  const [step, setStep] = useState(1);
  const [chefData, setChefData] = useState<ChefInfoFormData | null>(null);
  const [orderData, setOrderData] = useState<
    OrderInfoNearChefFormData | OrderInfoPersonalChefFormData | null
  >(null);

  const nextStepFromChefInfo = (data: ChefInfoFormData) => {
    setChefData(data);
    setStep(step + 1);
  };

  const nextStepFromOrderInfo = (
    data: OrderInfoNearChefFormData | OrderInfoPersonalChefFormData
  ) => {
    setOrderData(data);
    setStep(step + 1);
  };

  const handleMenuSubmit = (data: any) => {
    console.log("메뉴 등록 완료:", data);
    // 이후 로직 추가
  };

  return (
    <div>
      <Header />
      {step === 1 && <ChefInfo nextStep={nextStepFromChefInfo} />}
      {step === 2 && chefData && (
        <>
          {chefData.affiliation === "니어 요리사" && (
            <OrderInfoNearChef nextStep={nextStepFromOrderInfo} />
          )}
          {chefData.affiliation === "개인 요리사" && (
            <OrderInfoPersonalChef nextStep={nextStepFromOrderInfo} />
          )}
        </>
      )}
      {step === 3 && orderData && (
        <MenuRegistration
          affiliation={chefData!.affiliation}
          onSubmit={handleMenuSubmit}
        />
      )}
    </div>
  );
};

export default ChefRequest;
