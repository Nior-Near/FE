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
import MenuList from "@/src/components/ChefRequest/MenuList";

interface FormData {
  menuName: string;
  menuOneServing: number | null;
  menuIntroduction: string;
  menuImage: File | null;
}

const ChefRequest = () => {
  const [step, setStep] = useState(1);
  const [chefData, setChefData] = useState<ChefInfoFormData | null>(null);
  const [orderData, setOrderData] = useState<
    OrderInfoNearChefFormData | OrderInfoPersonalChefFormData | null
  >(null);
  const [menus, setMenus] = useState<FormData[]>([]);

  const nextStepFromChefInfo = (data: ChefInfoFormData) => {
    setChefData(data);
    setStep(2);
  };

  const nextStepFromOrderInfo = (
    data: OrderInfoNearChefFormData | OrderInfoPersonalChefFormData
  ) => {
    setOrderData(data);

    setStep(5);
  };

  const handleMenuSubmit = (data: FormData) => {
    setMenus([...menus, data]);
    setStep(4);
  };

  const handleCompleteMenuRegistration = () => {
    if (menus.length > 0) {
      setStep(6);
    }
  };

  const handleLetterSubmit = (data: any) => {
    console.log("편지 등록 완료:", data);
    setStep(3);
  };

  const handleBoxClick = () => {
    setStep(4);
  };

  return (
    <div>
      <Header step={step} />
      {step === 1 && <ChefInfo nextStep={nextStepFromChefInfo} />}
      {step === 2 && <LetterRegistration onSubmit={handleLetterSubmit} />}
      {step === 3 && chefData && (
        <>
          {chefData.affiliation === "니어 요리사" && (
            <OrderInfoNearChef nextStep={nextStepFromOrderInfo} />
          )}
          {chefData.affiliation === "개인 요리사" && (
            <OrderInfoPersonalChef nextStep={nextStepFromOrderInfo} />
          )}
        </>
      )}

      {step === 4 && <MenuList menus={menus} onBoxClick={handleBoxClick} />}
      {step === 5 && (
        <MenuRegistration
          affiliation={chefData!.affiliation}
          onSubmit={handleMenuSubmit}
          handleCompleteMenuRegistration={handleCompleteMenuRegistration}
          storeId={"storeId"}
        />
      )}
    </div>
  );
};

export default ChefRequest;
