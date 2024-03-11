
// import { stripeSubscribe } from "@/actions/stripe.subscribe";
import { GrowPlan, freePlan, scalePlan } from "@/app/configs/constants";
import { ICONS } from "@/shared/utils/icons";
// import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

const PricingCard = ({ active }: { active: string }) => {
//   const { user } = useUser();
//   const history = useRouter();
//   const handleSubscription = async ({ price }: { price: string }) => {
//     await stripeSubscribe({ price: price, userId: user?.id! }).then(
//       (res: any) => {
//         history.push(res);
//       }
//     );
//   };

  return (
    <div className="w-full md:flex items-start flex-wrap justify-around gap-5 py-2">
      {/* free plan */}
      <div className="md:w-[400px] bg-white z-50 rounded p-5  md:my-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          fill="string"
          className="mb-4"
        >
          <path
            fill="#fff"
            stroke="#1d4ed8"
            strokeWidth="3"
            d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
          ></path>
        </svg>
        <h5 className="font-clashDisplay uppercase text-cyber-ink text-2xl  border-b border-[#000]">
          Launch
        </h5>
        <br />
        <div className="border-b pb-2 border-[#000]">
          <h5 className="font-clashDisplay uppercase text-cyber-ink text-2xl">
            $0
          </h5>
          <p className="text-base">No commitment</p>
        </div>
        <div className="pt-2">
          <p className="text-lg">What&apos;s included...</p>
        </div>
        {freePlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-2">
            <span className="text-xl">{ICONS.right}</span>
            <p className="pl-2 text-base">{i.title}</p>
          </div>
        ))}
        <br />
        <Button 
        className="w-full bg-blue-700 text-lg  px-2 py-2 rounded-lg text-white">
          Start Free
        </Button>
        <p className="pt-1 opacity-[.7] text-center">
          30-day free trial of Scale features, then free forever
        </p>
      </div>

      {/* grow plan */}
      <div className="md:w-[400px] z-50 bg-white rounded p-5 my-5 md:my-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          fill="string"
          className="mb-4"
        >
          <path
            fill="#fff"
            stroke="#1d4ed8"
            strokeWidth="3"
            d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
          ></path>
        </svg>
        <h5 className="font-clashDisplay uppercase text-cyber-ink text-2xl  border-b border-[#000]">
          GROW
        </h5>
        <br />
        <div className="border-b pb-2 border-black">
          <h5 className="font-clashDisplay uppercase text-cyber-ink text-2xl">
            ${active === "Monthly" ? "49" : "42"} /month
          </h5>
          <p className="text-base">Billed {active}</p>
        </div>
        <div className="pt-2">
          <p className="text-lg">Everything in Launch, plus...</p>
        </div>
        {GrowPlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-2">
            <span className="text-xl">{ICONS.right}</span>
             <p className="pl-2 text-base">{i.title}</p>
          </div>
        ))}
        <br />
        <Button

          className="w-full text-white bg-blue-700 text-lg  p-2 rounded-lg "
        //   onClick={() =>
        //     handleSubscription({
        //       price:
        //         active === "Monthly"
        //           ? "price_1OnaWFSA1WAzNgKlsGN6K4ZW"
        //           : "price_1Onbt8SA1WAzNgKlyrXYlJBG",
        //     })
        //   }
        >
          Start Grow
        </Button>
        <p className="pt-1 opacity-[.7] text-center">
          30-day free trial of Scale features, then $
          {active === "Monthly" ? "42" : "49"}/mo
        </p>
      </div>

      {/* scale plan */}
      <div className="md:w-[400px] bg-white z-50 rounded p-5 my-5 md:my-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          fill="string"
          className="mb-4"
        >
          <path
            fill="#fff"
            stroke="#1d4ed8"
            strokeWidth="3"
            d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
          ></path>
        </svg>
        <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl  border-b border-[#000]">
          SCALE
        </h5>
        <br />
        <div className="border-b pb-2 border-[#000]">
          <h5 className="font-clashDisplay uppercase text-cyber-ink text-2xl">
            ${active === "Monthly" ? "99" : "84"} /month
          </h5>
          <p className="text-base">Billed {active}</p>
        </div>
        <div className="pt-2">
          <p className="text-lg">Everything in Grow, plus...</p>
        </div>
        {scalePlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-2">
            <span className="text-xl">{ICONS.right}</span>
            <p className="pl-2 text-base">{i.title}</p>
          </div>
        ))}
        <br />
        <Button
          className="w-full text-lg bg-blue-700  px-2 py-2 rounded-lg text-white"
        //   onClick={() =>
        //     handleSubscription({
        //       price:
        //         active === "Monthly"
        //           ? "price_1On2H2SA1WAzNgKlV64Zj6gE"
        //           : "price_1Onf9gSA1WAzNgKlg8NLBP4r",
        //     })
        //   }
        >
          Start Scale
        </Button>
        <p className="pt-1 opacity-[.7] text-center">
          30-day free trial of Scale features, then $
          {active === "Monthly" ? "99" : "84"}/mo
        </p>
      </div>
    </div>
  );
};

export default PricingCard;