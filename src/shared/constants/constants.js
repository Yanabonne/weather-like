// Примеры одежды
import m30 from "../../images/outfits/m30-and-lower.svg";
import m3020 from "../../images/outfits/m30-m20.svg";
import m2010_1 from "../../images/outfits/m20-m10_1.svg";
import m2010_2 from "../../images/outfits/m20-m10_2.svg";
import m100_1 from "../../images/outfits/m10-0.svg";
import p08_1 from "../../images/outfits/0-p8_1.svg";
import p08_2 from "../../images/outfits/0-p8_2.svg";
import p813_1 from "../../images/outfits/p8-p13_1.svg";
import p813_2 from "../../images/outfits/p8-p13_2.svg";
import p1319_1 from "../../images/outfits/p13-p19_1.svg";
import p1319_2 from "../../images/outfits/p13-p19_2.svg";
import p1924_1 from "../../images/outfits/p19-p24_1.svg";
import p1924_2 from "../../images/outfits/p19-p24_2.svg";
import p24_1 from "../../images/outfits/p24-and-higher_1.svg";
import p24_2 from "../../images/outfits/p24-and-higher_2.svg";

// Картинки для вдохновения
import g1_1 from "../../images/samples-outfits/m30-and-lower/1.jpg";
import g1_2 from "../../images/samples-outfits/m30-and-lower/2.jpg";
import g1_3 from "../../images/samples-outfits/m30-and-lower/3.jpg";
import g1_4 from "../../images/samples-outfits/m30-and-lower/4.jpg";
import g1_5 from "../../images/samples-outfits/m30-and-lower/5.jpg";
import g1_6 from "../../images/samples-outfits/m30-and-lower/6.jpg";

import g2_1 from "../../images/samples-outfits/m30-m20/1.jpg";
import g2_2 from "../../images/samples-outfits/m30-m20/2.jpg";
import g2_3 from "../../images/samples-outfits/m30-m20/3.jpg";
import g2_4 from "../../images/samples-outfits/m30-m20/4.jpg";
import g2_5 from "../../images/samples-outfits/m30-m20/5.jpg";
import g2_6 from "../../images/samples-outfits/m30-m20/6.png";

import g3_1 from "../../images/samples-outfits/m20-m10/1.jpg";
import g3_2 from "../../images/samples-outfits/m20-m10/2.jpg";
import g3_3 from "../../images/samples-outfits/m20-m10/3.jpg";
import g3_4 from "../../images/samples-outfits/m20-m10/4.jpg";
import g3_5 from "../../images/samples-outfits/m20-m10/5.jpg";
import g3_6 from "../../images/samples-outfits/m20-m10/6.jpg";

import g4_1 from "../../images/samples-outfits/m10-0/1.jpg";
import g4_2 from "../../images/samples-outfits/m10-0/2.jpg";
import g4_3 from "../../images/samples-outfits/m10-0/3.jpg";
import g4_4 from "../../images/samples-outfits/m10-0/4.jpg";
import g4_5 from "../../images/samples-outfits/m10-0/5.png";
import g4_6 from "../../images/samples-outfits/m10-0/6.jpg";

import g5_1 from "../../images/samples-outfits/0-p8/1.jpg";
import g5_2 from "../../images/samples-outfits/0-p8/2.jpg";
import g5_3 from "../../images/samples-outfits/0-p8/3.jpg";
import g5_4 from "../../images/samples-outfits/0-p8/4.jpg";
import g5_5 from "../../images/samples-outfits/0-p8/5.jpg";
import g5_6 from "../../images/samples-outfits/0-p8/6.jpg";

import g6_1 from "../../images/samples-outfits/p8-p13/1.jpg";
import g6_2 from "../../images/samples-outfits/p8-p13/2.jpg";
import g6_3 from "../../images/samples-outfits/p8-p13/3.jpg";
import g6_4 from "../../images/samples-outfits/p8-p13/4.jpg";
import g6_5 from "../../images/samples-outfits/p8-p13/5.webp";
import g6_6 from "../../images/samples-outfits/p8-p13/6.jpg";

import g7_1 from "../../images/samples-outfits/p13-p19/1.jpg";
import g7_2 from "../../images/samples-outfits/p13-p19/2.jpg";
import g7_3 from "../../images/samples-outfits/p13-p19/3.jpg";
import g7_4 from "../../images/samples-outfits/p13-p19/4.jpg";
import g7_5 from "../../images/samples-outfits/p13-p19/5.jpg";
import g7_6 from "../../images/samples-outfits/p13-p19/6.jpg";

import g8_1 from "../../images/samples-outfits/p19-p24/1.jpg";
import g8_2 from "../../images/samples-outfits/p19-p24/2.jpg";
import g8_3 from "../../images/samples-outfits/p19-p24/3.jpg";
import g8_4 from "../../images/samples-outfits/p19-p24/4.jpg";
import g8_5 from "../../images/samples-outfits/p19-p24/5.jpg";
import g8_6 from "../../images/samples-outfits/p19-p24/6.jpg";

import g9_1 from "../../images/samples-outfits/p24-and-higher/1.jpg";
import g9_2 from "../../images/samples-outfits/p24-and-higher/2.jpg";
import g9_3 from "../../images/samples-outfits/p24-and-higher/3.jpg";
import g9_4 from "../../images/samples-outfits/p24-and-higher/4.jpg";
import g9_5 from "../../images/samples-outfits/p24-and-higher/5.webp";
import g9_6 from "../../images/samples-outfits/p24-and-higher/6.jpg";

export const weatherGroups = {
  minus30: {
    samples: [m30],
    description: "Пример одежды для температуры ниже минус 30",
    inspo: [g1_1, g1_2, g1_3, g1_4, g1_5, g1_6],
  },
  minus30_20: {
    samples: [m3020],
    description: "Пример одежды для температуры от минус 30 до минус 20",
    inspo: [g2_1, g2_2, g2_3, g2_4, g2_5, g2_6],
  },
  minus20_10: {
    samples: [m2010_1, m2010_2],
    description: "Пример одежды для температуры от минус 20 до минус 10",
    inspo: [g3_1, g3_2, g3_3, g3_4, g3_5, g3_6],
  },
  minus10_0: {
    samples: [m100_1],
    description: "Пример одежды для температуры от минус 10 до нуля",
    inspo: [g4_1, g4_2, g4_3, g4_4, g4_5, g4_6],
  },
  plus0_8: {
    samples: [p08_1, p08_2],
    description: "Пример одежды для температуры от нуля до плюс 8",
    inspo: [g5_1, g5_2, g5_3, g5_4, g5_5, g5_6],
  },
  plus8_13: {
    samples: [p813_1, p813_2],
    description: "Пример одежды для температуры от плюс 8 до плюс 13",
    inspo: [g6_1, g6_2, g6_3, g6_4, g6_5, g6_6],
  },
  plus13_19: {
    samples: [p1319_1, p1319_2],
    description: "Пример одежды для температуры от плюс 13 до плюс 19",
    inspo: [g7_1, g7_2, g7_3, g7_4, g7_5, g7_6],
  },
  plus19_24: {
    samples: [p1924_1, p1924_2],
    description: "Пример одежды для температуры от плюс 19 до плюс 24",
    inspo: [g8_1, g8_2, g8_3, g8_4, g8_5, g8_6],

  },
  plus24: {
    samples: [p24_1, p24_2],
    description: "Пример одежды для температуры от плюс 24",
    inspo: [g9_1, g9_2, g9_3, g9_4, g9_5, g9_6],
  },
};

export const randomAnswers = [
  "Да",
  "Нет",
  "Даже не думай!",
  "Спроси друга",
  "Одназначно да",
  "Однозначно нет",
  "Конечно да",
];
