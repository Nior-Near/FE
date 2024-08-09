import React, { useState } from "react";
import Header from "@/src/components/ChefRequest/Header";
import ChefInfo, { FormData } from "@/src/components/ChefRequest/ChefInfo"; // FormData 가져오기
import OrderInfoNearChef from "@/src/components/ChefRequest/OrderInfoNearChef";
import OrderInfoPersonalChef from "@/src/components/ChefRequest/OrderInfoPersonalChef";

const ChefRequest = () => {
  const [step, setStep] = useState(1);
  const [chefData, setChefData] = useState<FormData | null>(null); // 타입 명시

  const nextStep = (data: FormData) => {
    setChefData(data);
    setStep(step + 1);
  };

  return (
    <div>
      <Header />
      {step === 1 && <ChefInfo nextStep={nextStep} />}
      {step === 2 && chefData && (
        <>
          {chefData.affiliation === "니어 요리사" && <OrderInfoNearChef />}
          {chefData.affiliation === "개인 요리사" && <OrderInfoPersonalChef />}
        </>
      )}
    </div>
  );
};

export default ChefRequest;
