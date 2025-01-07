import { useControls } from "leva";

export default () => {
  const { enabled, ...props } = useControls("point light", {
    enabled: {
      value: true,
    },
    color: "#ffffff",
    intensity: 1,
    distance: {
      value: 0,
      step: 0.1,
      min: 0,
      max: 10,
    },
    decay: {
      value: 2,
      step: 0.1,
      min: 0,
      max: 10,
    },
    position: [0, 0, 1],
  });
  return <>{enabled && <pointLight {...props} />}</>;
};
