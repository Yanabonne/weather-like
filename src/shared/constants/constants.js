import m30 from "../../images/outfits/m30-and-lower.svg"
import m3020 from "../../images/outfits/m30-m20.svg"
import m2010_1 from "../../images/outfits/m20-m10_1.svg"
import m2010_2 from "../../images/outfits/m20-m10_2.svg"
import m100_1 from "../../images/outfits/m10-0.svg"
import p08_1 from "../../images/outfits/0-p8_1.svg"
import p08_2 from "../../images/outfits/0-p8_2.svg"
import p813_1 from "../../images/outfits/p8-p13_1.svg"
import p813_2 from "../../images/outfits/p8-p13_2.svg"
import p1319_1 from "../../images/outfits/p13-p19_1.svg"
import p1319_2 from "../../images/outfits/p13-p19_2.svg"
import p1924_1 from "../../images/outfits/p19-p24_1.svg"
import p1924_2 from "../../images/outfits/p19-p24_2.svg"
import p24_1 from "../../images/outfits/p24-and-higher_1.svg"
import p24_2 from "../../images/outfits/p24-and-higher_2.svg"

export const weatherGroups = {
    minus30: {
        samples: [m30],
        description: "Пример одежды для температуры ниже минус 30"
    },
    minus30_20: {
        samples: [m3020],
        description: "Пример одежды для температуры от минус 30 до минус 20"
    }
    ,
    minus20_10: {
        samples: [m2010_1, m2010_2],
        description: "Пример одежды для температуры от минус 20 до минус 10"
    }
    ,
    minus10_0: {
        samples: [m100_1],
        description: "Пример одежды для температуры от минус 10 до нуля"
    },
    plus0_8: {
        samples: [p08_1, p08_2],
        description: "Пример одежды для температуры от нуля до плюс 8"
    },
    plus8_13: {
        samples: [p813_1, p813_2],
        description: "Пример одежды для температуры от плюс 8 до плюс 13"
    },
    plus13_19: {
        samples: [p1319_1, p1319_2],
        description: "Пример одежды для температуры от плюс 13 до плюс 19"
    },
    plus19_24: {
        samples: [p1924_1, p1924_2],
        description: "Пример одежды для температуры от плюс 19 до плюс 24"
    },
    plus24: {
        samples: [p24_1, p24_2],
        description: "Пример одежды для температуры от плюс 24"
    }
}

export const randomAnswers = [
    'Да', 'Нет', 'Даже не думай!', 'Спроси друга', 'Однозначно нет', 'Конечно да'
]