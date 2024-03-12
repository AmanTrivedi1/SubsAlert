import React from "react";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto p-2">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white/5 ">
      <img src="/Create.png" alt="/"  className="w-full h-full object-contain" />
  </div>
);

const Create = () => (
   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white/5 ">
      <img src="/Create.png" alt="/"  className="w-full object-contain h-full" />
  </div>
)
const Grow = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white/5">
     <img src="/grow.png" alt="/"  className="w-full object-contain h-full" />
 </div>
)


const PUBLISH = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white/5 ">
     <img src="/Publish.png" alt="/"  className="w-full object-contain h-full" />
 </div>
)

const MONETIZE = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white/5">
     <img src="/Monetize-2.png" alt="/"  className="w-full object-contain h-full" />
 </div>
)



const items = [
  {
    title: "CREATE",
    description: "The most powerful editing and design tools in email",
    header: <Create />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "GROW",
    description: "Use the same suite of tools used by the world’s largest newsletters",
    header: <Grow />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "MONETIZE",
    description: "Like you have a full sales and revenue team on your staff.",
    header: <MONETIZE />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "PUBLISH",
    description:
      "Launch the next iconic media brand in minutes. No code needed. Ever.",
    header: <PUBLISH />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "SEND",
    description: "Send the message that you want to user read",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
