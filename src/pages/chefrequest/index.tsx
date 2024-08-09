import Header from "@/src/components/ChefRequest/Header";
import ChefInfo from "@/src/components/ChefRequest/ChefInfo";
import OrderInfo from "@/src/components/ChefRequest/OrderInfo";

import { useState } from "react";

const ChefRequest = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  return (
    <div>
      <Header />
      {step === 1 && <ChefInfo nextStep={nextStep} />}
      {step === 2 && <OrderInfo />}
    </div>
  );
};

export default ChefRequest;
