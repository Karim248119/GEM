import { Quicksand } from "next/font/google";

import localFont from "next/font/local";
const letter = localFont({ src: "./fonts/Wasted-Vindey.ttf" });
const raccosetta = localFont({ src: "./fonts/Raccosetta.ttf" });
const header1 = localFont({
  src: "./fonts/Rechgart_Bold.otf",
});
const header2 = localFont({
  src: "./fonts/Sephir-Regular.otf",
});
const base2 = localFont({ src: "./fonts/Sephir-Regular.otf" });

const base = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const Fonts = {
  base,
  header1,
  header2,
  raccosetta,
  letter,
};
