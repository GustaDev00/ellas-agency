import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function useAnimation() {
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svgPaths = svgRef.current?.querySelectorAll("path");
    if (!svgPaths) return;

    // Configura os caminhos para o estado inicial
    gsap.set(svgPaths, { drawSVG: 0, opacity: 1 });

    svgPaths.forEach((path) => {
      const animatedClone = path.cloneNode(true) as SVGPathElement;
      path.insertAdjacentElement("afterend", animatedClone);

      // Configura o clone para o estado inicial
      gsap.set(animatedClone, {
        stroke: "#191919",
        drawSVG: 0,
      });

      // Cria uma timeline para animar o preenchimento e apagar continuamente
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

      tl.to(animatedClone, {
        drawSVG: "100%", // Preenche
        duration: 2,
      }).to(animatedClone, {
        drawSVG: 0, // Apaga
        duration: 2,
      });
    });
  }, []);

  return { svgRef };
}
