import { useControls } from "leva";

export default () => {
  const { enabled, ...props } = useControls("light probe", {
    enabled: {
      value: false,
    },
    intensity: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.01,
    },
  });
  return <>{enabled && <lightProbe {...props} />}</>;
};
