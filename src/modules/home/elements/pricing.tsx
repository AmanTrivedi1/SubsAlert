"use client";
import PricingCard from "@/shared/components/cards/pricing.card";

import { Button } from "@nextui-org/react";
import { useState } from "react";

const Pricing = () => {
  const [active, setActive] = useState("Monthly");
  return (
    <div className="  ">
      <div className="w-[100%] m-auto py-2">
        <div className="w-full md:flex justify-between">
          <div className="flex items-center mt-2 md:mt-0">
            <Button
              className={`${
                active === "Monthly"
                  ? "bg-[#FFAB90] text-white"
                  : "bg-white text-black"
              } rounded-r-[0] !p-4 md:text-lg text-xs !px-4 border border-[#000]`}
              onClick={() => setActive("Monthly")}
            >
              Monthly
            </Button>
            <Button
              className={`${
                active === "Yearly"
                  ? "bg-[#FFAB90] text-white"
                  : "bg-white text-black"
              } rounded-l-[0] !p-4 md:text-lg text-xs !px-4 border border-[#000]`}
              onClick={() => setActive("Yearly")}>
              Yearly
            </Button>
          </div>
        </div>
        <PricingCard active={active} />
      </div>
    </div>
  );
};

export default Pricing;