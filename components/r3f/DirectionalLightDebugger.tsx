import { useControls } from "leva";

export default () => {
  const { enabled, ...props } = useControls("directional light", {
    enabled: {
      value: true,
    },
    color: "#ffffff",
    intensity: {
      value: 1,
      step: 0.1,
      min: 0,
      max: 10,
    },
    position: [0, 0, 1],
    castShadow: false,
  });
  return <>{enabled && <directionalLight {...props} />}</>;
};
