import { Logo as _Logo } from "@/components/atoms/logo";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Home = styled.section`
  position: relative;
  padding: 4rem 2rem;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  position: absolute;
  top: 4rem;
`;

export const Logo = styled(_Logo)``;

export const Content = styled.article`
  ${mediaMaxWidth("mobile")`
    margin-top: 8rem;
  `}
`;

export const Title = styled.h1`
  color: #191919;
  font-size: 14rem;
  font-weight: 700;
  letter-spacing: -0.4rem;
  text-align: center;

  span {
    color: #9b1973;
  }

  ${mediaMaxWidth("mobile")`
    font-size: 5.1rem;
    letter-spacing: -0.22rem;
  `}
`;

export const Subtitle = styled.h2`
  color: #191919;
  margin: 2.4rem 0 4.5rem;
  text-align: center;
  font-size: 3rem;
  font-family: var(--chocolates);
  font-weight: 100;

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
  `}
`;

export const Description = styled.p`
  text-align: center;
  margin-bottom: 4.5rem;
  color: #9b1973;
  font-size: 2.6rem;
  font-family: var(--chocolates);
  font-weight: 100;

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
  `}
`;

export const Text = styled.p`
  text-align: center;
  color: #9b1973;
  font-family: var(--radley);
  font-size: 2.6rem;

  span {
    color: #191919;
    font-family: var(--radley);
  }

  ${mediaMaxWidth("mobile")`
    font-size: 2rem;
  `}
`;
