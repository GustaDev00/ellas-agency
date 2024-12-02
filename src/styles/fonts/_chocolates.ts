import localFont from "next/font/local";

export const chocolatesTT = localFont({
  variable: "--chocolates",
  src: [
    {
      path: "../../../public/fonts/chocolates/chocolates-tt-ExtraBold.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../public/fonts/chocolates/chocolates-tt-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/chocolates/chocolates-tt-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/chocolates/chocolates-tt-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/chocolates/chocolates-tt-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/chocolates/chocolates-tt-Regular.otf",
      weight: "100",
      style: "normal",
    },
  ],
  display: "swap",
});
