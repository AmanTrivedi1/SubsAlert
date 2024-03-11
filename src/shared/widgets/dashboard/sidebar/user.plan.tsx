// import { manageSubscription } from "@/actions/manage.subscription";
// import useGetMembership from "@/shared/hooks/useGetMembership";
// import useSubscribersData from "@/shared/hooks/useSubscribersData";
import { ICONS } from "@/shared/utils/icons";
import { Button } from "@nextui-org/react";
import { Slider } from "@nextui-org/slider";
import { useRouter } from "next/navigation";

const UserPlan = () => {
//   const { data, loading } = useSubscribersData();
//   const { data: membershipData, loading: membershipLoading } =
//     useGetMembership();
//   const history = useRouter();

//   const handleManage = async () => {
//     await manageSubscription({
//       customerId: membershipData?.stripeCustomerId,
//     }).then((res: any) => {
//       history.push(res);
//     });
//   };

  return (
    <div className="w-full my-3 p-3 bg-white/5 rounded hover:shadow-xl cursor-pointer">
      <div className="w-full flex items-center">
        <h5 className="text-lg font-medium">
          {/* {membershipLoading ? "..." : "GROW"} Plan */}
        </h5>
  
      </div>
      <h5 className="text-green-500">Total subscribers</h5>
      <Slider
        aria-label="Player progress"
        hideThumb={true}
        defaultValue={1}
        className="max-w-md"
      />
         <Button
          className="w-full shadow mt-4 cursor-pointer h-[32px] flex justify-center items-center space-x-1 rounded-lg bg-blue-700"
        //   onClick={handleManage}
        >
          <span className="text-white text-xl">{ICONS.electric}</span>
          <span className="text-white text-sm">Upgrade</span>
        </Button>
      {/* <h6 className="text-[#831743]">
        {loading ? "..." : data?.length} of{" "}
        {membershipData?.plan === "LAUNCH"
          ? "2500"
          : membershipData?.plan === "SCALE"
          ? "10,000"
          : "1,00,000"}{" "}
        added
      </h6> */}
    </div>
  );
};

export default UserPlan;