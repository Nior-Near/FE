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
import LetterRegistration from "@/src/components/ChefRequest/LetterRegistration";

const ChefRequest = () => {
  const [step, setStep] = useState(1);
  const [chefData, setChefData] = useState<ChefInfoFormData | null>(null);
  const [orderData, setOrderData] = useState<
    OrderInfoNearChefFormData | OrderInfoPersonalChefFormData | null
  >(null);
  const [menus, setMenus] = useState<FormData[]>([]);

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
    setMenus([...menus, data]);
  };

  const handleCompleteMenuRegistration = () => {
    // 메뉴가 하나 이상 등록되었을 때만 다음 단계로 이동
    if (menus.length > 0) {
      setStep(step + 1);
    }
  };
  const handleLetterSubmit = (data: any) => {
    console.log("편지 등록 완료:", data);
    // 최종
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
          handleCompleteMenuRegistration={handleCompleteMenuRegistration}
        />
      )}
      {step === 4 && <LetterRegistration onSubmit={handleLetterSubmit} />}{" "}
    </div>
  );
};

export default ChefRequest;
