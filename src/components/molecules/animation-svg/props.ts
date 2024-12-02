import { type ReactNode } from "react";

export interface AnimationSvgProps {
  /**
   * Recebe o SVG que vai ser animado
   */
  svg: ReactNode;
  /**
   * Classe do componente
   */
  className?: string;
}
