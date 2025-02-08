import { useControls } from "leva";

export default () => {
  const { enabled, ...props } = useControls("hemisphere light", {
    enabled: {
      value: false,
    },
    color: "#ffffff",
    groundColor: "#ffffff",
    intensity: {
      value: 1,
      step: 0.1,
      min: 0,
      max: 10,
    },
  });
  return <>{enabled && <hemisphereLight {...props} />}</>;
};
