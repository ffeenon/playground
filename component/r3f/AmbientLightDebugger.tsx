import { useControls } from "leva";

export default () => {
  const { enabled, ...props } = useControls("ambient light", {
    enabled: {
      value: true,
    },
    intensity: {
      value: 1,
      step: 0.1,
      min: 0,
      max: 10,
    },
    color: "#ffffff",
  });
  return <>{enabled && <ambientLight {...props} />}</>;
};
