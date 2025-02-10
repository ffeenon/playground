import useConceptStore from "@/store/useConceptStore";
import { useEffect } from "react";

export default (concept: string) => {
  const setConcept = useConceptStore((state) => state.setConcept);

  useEffect(() => {
    setConcept(concept);

    return () => {
      setConcept("");
    };
  }, []);
};
