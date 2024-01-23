/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    container: {
      center: true,
      padding: "15px",
    },
    colors: {
      accent: "#ff8f9c",
      blackish: "#1b1b1b",
      mainWhite: "#ffffff",
      mainBlack: "#161616",
      mainPink: "#e5087e",
      mainDarkBlue: "#171d2f",
      mainGray: "#f6f5f6",
    },
    fontFamily: {
      cairo: ["cairo", "sans-serif"],
      rubik: ["rubik", "sans-serif"],
    },
  },
};

export const darkMode = "class";

export const plugins = [nextui()];
