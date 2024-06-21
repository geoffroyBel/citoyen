import { useSpring, motion } from "framer-motion";
import { useEffect } from "react";

interface LoaderProps {
  totalSteps: number;
  currentStep: number;
  [key: string]: any;
}
interface TileProps {
  isSubmitted: boolean;
}
export const Tile = ({ isSubmitted }: TileProps) => {
  const scaleX = useSpring(0, { stiffness: 1000, damping: 100 });

  useEffect(() => {
    if (isSubmitted) {
      scaleX.set(1);
    } else {
      scaleX.set(0);
    }
  }, [isSubmitted]);

  return (
    <motion.div
      style={{
        position: "absolute",
        transformOrigin: "left",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        scaleX,
      }}
      className="bg-primary"
    ></motion.div>
  );
};
const Loader = ({ totalSteps = 2, currentStep, ...rest }: LoaderProps) => {
  return (
    <div {...rest}>
      {[...new Array(totalSteps)].map((el, i) => {
        return (
          <div key={i} className="relative flex-1 h-full bg-blue-200">
            <Tile isSubmitted={i <= currentStep} />
          </div>
        );
      })}
    </div>
  );
};

export default Loader;
