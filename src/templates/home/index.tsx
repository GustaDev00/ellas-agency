"use client";

import { type FC } from "react";
import * as S from "./styles";
import { CustomBr } from "@/components/atoms/custom-br";

export const HomeTemplate: FC = () => {
  return (
    <S.Home>
      <S.Container>
        <S.Logo />
      </S.Container>
      <S.Content>
        <S.Title>
          Oie, prazer <span>Ella!</span>
        </S.Title>
        <S.Subtitle>
          Agência focada em influenciadores de Lifestyle, Beauty, Moda
          <CustomBr byViewport="desktop" /> e muito mais
        </S.Subtitle>
        <S.Description>
          Site em construção. Fique atento, novidades estão a
          <CustomBr byViewport="desktop" /> caminho 👀
        </S.Description>
        <S.Text>
          <span>By</span>
          <br />
          Raphaela Vitor
        </S.Text>
      </S.Content>
    </S.Home>
  );
};
