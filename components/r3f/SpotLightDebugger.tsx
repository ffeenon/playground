import { useControls } from "leva";

export default () => {
  const { enabled, ...props } = useControls("spot light", {
    enabled: {
      value: false,
    },
    color: "#ffffff",
    intensity: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.01,
    },
    distance: {
      value: 0, // 0 no limit
      min: 0,
      max: 100,
      step: 0.1,
    },
    angle: {
      value: Math.PI / 3,
      min: 0,
      max: Math.PI / 2,
      step: 0.01,
    },
    penumbra: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.01,
    },
    decay: {
      value: 2,
      min: 0,
      max: 10,
      step: 0.01,
    },
    position: [0, 0, 1],
  });
  return <>{enabled && <spotLight {...props} />}</>;
};