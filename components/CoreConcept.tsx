"use client";

import getRandomColor from "@/util/getRandomColor";
import useConceptStore from "@/store/useConceptStore";

export default () => {
  const concept = useConceptStore((state) => state.concept);

  return (
    <div
      className=" flex items-center justify-center text-white h-10"
      style={{ backgroundColor: getRandomColor() }}
    >
      {concept}
    </div>
  );
};
