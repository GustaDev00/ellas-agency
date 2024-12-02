import { type ReactNode } from "react";
import { type AnimationSvgProps } from "./props";
import useAnimation from "./animation";
import * as S from "./styles";

export const AnimationSvg = ({ svg, className }: AnimationSvgProps): ReactNode => {
  const { svgRef } = useAnimation();

  return (
    <S.AnimationSvg ref={svgRef} className={className}>
      {svg}
    </S.AnimationSvg>
  );
};
