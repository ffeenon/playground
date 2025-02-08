import { useControls } from "leva";

export default () => {
  const { enabled, ...props } = useControls("rect area light", {
    enabled: {
      value: false,
    },
    color: "#ffffff",
    intensity: 1,
    width: 1,
    height: 1,
    position: [0, 0, 1],
    rotation: [0, 0, 0],
  });
  return <>{enabled && <rectAreaLight {...props} />}</>;
};
