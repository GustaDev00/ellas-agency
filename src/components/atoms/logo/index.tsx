import * as S from "./styles";
import { LogoIcon } from "@/components/svgs/logo";

export const Logo = ({ className }: { className?: string }) => (
  <S.Logo className={className}>
    <S.Name>ella's</S.Name>
    <S.Small>PR Agency</S.Small>
  </S.Logo>
);
