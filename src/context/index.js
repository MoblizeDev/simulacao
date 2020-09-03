import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [tableContext, setTableContext] = useState([
    {
      data: [
        {
          utineo: 17,
          utiped: 5,
          uti1: 5,
          uti2: 7,
          uti3: 13,
          uti4: 2,
          uti5: 0,
          uti6: 20,
          uti7: 0,
          uti8: 7,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 8,
          utiped: 3,
          uti1: 7,
          uti2: 3,
          uti3: 3,
          uti4: 2,
          uti5: 0,
          uti6: 17,
          uti7: 0,
          uti8: 7,
          uti9: 0,
          uti10: 2,
          uti11: 3,
          uti12: 0,
        },
        {
          utineo: 7,
          utiped: 9,
          uti1: 1,
          uti2: 1,
          uti3: 2,
          uti4: 5,
          uti5: 1,
          uti6: 9,
          uti7: 1,
          uti8: 2,
          uti9: 0,
          uti10: 2,
          uti11: 2,
          uti12: 0,
        },
        {
          utineo: 17,
          utiped: 1,
          uti1: 5,
          uti2: 0,
          uti3: 6,
          uti4: 1,
          uti5: 0,
          uti6: 18,
          uti7: 3,
          uti8: 6,
          uti9: 0,
          uti10: 11,
          uti11: 5, //posto2
          uti12: 0,
        },
      ],
      totalSetor: {
        utineo: 49,
        utiped: 18,
        uti1: 18,
        uti2: 11,
        uti3: 24,
        uti4: 24,
        uti5: 1,
        uti6: 64,
        uti7: 4,
        uti8: 22,
        uti9: 0,
        uti10: 15,
        uti11: 10,
        uti12: 0,
      },
      totalSemana: [76, 52, 40, 68],
      pendenciasSetor: {
        utineo: [0, 0, 0, 0],
        utiped: [0, 0, 0, 0],
        uti1: [0, 0, 0, 0],
        uti2: [0, 0, 0, 0],
        uti3: [0, 0, 0, 0],
        uti4: [0, 0, 0, 0],
        uti5: [0, 0, 0, 0],
        uti6: [0, 0, 0, 0],
        uti7: [0, 0, 0, 0],
        uti8: [0, 0, 0, 0],
        uti9: [0, 0, 0, 0],
        uti10: [0, 0, 0, 0],
        uti11: [0, 0, 0, 0],
        uti12: [0, 0, 0, 0],
      },
      pendenciasSemana: [2, 6, 5, 3],
    },
    {
      data: [
        {
          utineo: 15,
          utiped: 1,
          uti1: 8,
          uti2: 0,
          uti3: 3,
          uti4: 2,
          uti5: 0,
          uti6: 17,
          uti7: 0,
          uti8: 12,
          uti9: 0,
          uti10: 8,
          uti11: 2,
          uti12: 0,
        },
        {
          utineo: 19,
          utiped: 0,
          uti1: 7,
          uti2: 1,
          uti3: 6,
          uti4: 3,
          uti5: 0,
          uti6: 19,
          uti7: 0,
          uti8: 11,
          uti9: 0,
          uti10: 4,
          uti11: 2,
          uti12: 0,
        },
        {
          utineo: 19,
          utiped: 4,
          uti1: 3,
          uti2: 0,
          uti3: 6,
          uti4: 2,
          uti5: 1,
          uti6: 19,
          uti7: 0,
          uti8: 4,
          uti9: 0,
          uti10: 1,
          uti11: 2,
          uti12: 0,
        },
        {
          utineo: 8,
          utiped: 2,
          uti1: 4,
          uti2: 3,
          uti3: 9,
          uti4: 13,
          uti5: 1,
          uti6: 28,
          uti7: 12,
          uti8: 3,
          uti9: 0,
          uti10: 8,
          uti11: 4,
          uti12: 0,
        },
      ],
      totalSetor: {
        utineo: 61,
        utiped: 7,
        uti1: 22,
        uti2: 4,
        uti3: 24,
        uti4: 24,
        uti5: 2,
        uti6: 83,
        uti7: 12,
        uti8: 30,
        uti9: 0,
        uti10: 21,
        uti11: 10,
        uti12: 0,
      },
      totalSemana: [68, 72, 61, 95],
      pendenciasSetor: {
        utineo: [0, 0, 0, 0],
        utiped: [0, 0, 0, 0],
        uti1: [0, 0, 0, 0],
        uti2: [0, 0, 0, 0],
        uti3: [0, 0, 0, 0],
        uti4: [0, 0, 0, 0],
        uti5: [0, 0, 0, 0],
        uti6: [0, 0, 0, 0],
        uti7: [0, 0, 0, 0],
        uti8: [0, 0, 0, 0],
        uti9: [0, 0, 0, 0],
        uti10: [0, 0, 0, 0],
        uti11: [0, 0, 0, 0],
        uti12: [0, 0, 0, 0],
      },
      pendenciasSemana: [11, 1, 11, 2],
    },
    {
      data: [
        {
          utineo: 7,
          utiped: 1,
          uti1: 5,
          uti2: 0,
          uti3: 8,
          uti4: 10,
          uti5: 2,
          uti6: 2,
          uti7: 0,
          uti8: 3,
          uti9: 0,
          uti10: 4,
          uti11: 4,
          uti12: 0,
        },
        {
          utineo: 15,
          utiped: 4,
          uti1: 6,
          uti2: 0,
          uti3: 6,
          uti4: 20,
          uti5: 7,
          uti6: 3,
          uti7: 0,
          uti8: 5,
          uti9: 0,
          uti10: 11,
          uti11: 6,
          uti12: 0,
        },
        {
          utineo: 26,
          utiped: 3,
          uti1: 2,
          uti2: 2,
          uti3: 8,
          uti4: 16,
          uti5: 2,
          uti6: 7,
          uti7: 0,
          uti8: 3,
          uti9: 0,
          uti10: 6,
          uti11: 4,
          uti12: 0,
        },
        {
          utineo: 14,
          utiped: 8,
          uti1: 4,
          uti2: 5,
          uti3: 10,
          uti4: 5,
          uti5: 6,
          uti6: 10,
          uti7: 3,
          uti8: 7,
          uti9: 0,
          uti10: 9,
          uti11: 8,
          uti12: 5,
        },
      ],
      totalSetor: {
        utineo: 62,
        utiped: 16,
        uti1: 17,
        uti2: 7,
        uti3: 32,
        uti4: 32,
        uti5: 17,
        uti6: 22,
        uti7: 3,
        uti8: 18,
        uti9: 0,
        uti10: 30,
        uti11: 22,
        uti12: 0,
      },
      totalSemana: [46, 83, 79, 94],
      pendenciasSetor: {
        utineo: [0, 0, 0, 0],
        utiped: [0, 0, 0, 0],
        uti1: [0, 0, 0, 0],
        uti2: [0, 0, 0, 0],
        uti3: [0, 0, 0, 0],
        uti4: [0, 0, 0, 0],
        uti5: [0, 0, 0, 0],
        uti6: [0, 0, 0, 0],
        uti7: [0, 0, 0, 0],
        uti8: [0, 0, 0, 0],
        uti9: [0, 0, 0, 0],
        uti10: [0, 0, 0, 0],
        uti11: [0, 0, 0, 0],
        uti12: [0, 0, 0, 0],
      },
      pendenciasSemana: [4, 3, 6, 7],
    },
    {
      data: [
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
      ],
      totalSetor: {
        utineo: 0,
        utiped: 0,
        uti1: 0,
        uti2: 0,
        uti3: 0,
        uti4: 0,
        uti5: 0,
        uti6: 0,
        uti7: 0,
        uti8: 0,
        uti9: 0,
        uti10: 0,
        uti11: 0,
        uti12: 0,
      },
      totalSemana: [0, 0, 0, 0],
      pendenciasSetor: {
        utineo: [0, 0, 0, 0],
        utiped: [0, 0, 0, 0],
        uti1: [0, 0, 0, 0],
        uti2: [0, 0, 0, 0],
        uti3: [0, 0, 0, 0],
        uti4: [0, 0, 0, 0],
        uti5: [0, 0, 0, 0],
        uti6: [0, 0, 0, 0],
        uti7: [0, 0, 0, 0],
        uti8: [0, 0, 0, 0],
        uti9: [0, 0, 0, 0],
        uti10: [0, 0, 0, 0],
        uti11: [0, 0, 0, 0],
        uti12: [0, 0, 0, 0],
      },
      pendenciasSemana: [0, 0, 0, 0],
    },
    {
      data: [
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
      ],
      totalSetor: {
        utineo: 0,
        utiped: 0,
        uti1: 0,
        uti2: 0,
        uti3: 0,
        uti4: 0,
        uti5: 0,
        uti6: 0,
        uti7: 0,
        uti8: 0,
        uti9: 0,
        uti10: 0,
        uti11: 0,
        uti12: 0,
      },
      totalSemana: [0, 0, 0, 0],
      pendenciasSetor: {
        utineo: [0, 0, 0, 0],
        utiped: [0, 0, 0, 0],
        uti1: [0, 0, 0, 0],
        uti2: [0, 0, 0, 0],
        uti3: [0, 0, 0, 0],
        uti4: [0, 0, 0, 0],
        uti5: [0, 0, 0, 0],
        uti6: [0, 0, 0, 0],
        uti7: [0, 0, 0, 0],
        uti8: [0, 0, 0, 0],
        uti9: [0, 0, 0, 0],
        uti10: [0, 0, 0, 0],
        uti11: [0, 0, 0, 0],
        uti12: [0, 0, 0, 0],
      },
      pendenciasSemana: [0, 0, 0, 0],
    },
    {
      data: [
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
      ],
      totalSetor: {
        utineo: 0,
        utiped: 0,
        uti1: 0,
        uti2: 0,
        uti3: 0,
        uti4: 0,
        uti5: 0,
        uti6: 0,
        uti7: 0,
        uti8: 0,
        uti9: 0,
        uti10: 0,
        uti11: 0,
        uti12: 0,
      },
      totalSemana: [0, 0, 0, 0],
      pendenciasSetor: {
        utineo: [0, 0, 0, 0],
        utiped: [0, 0, 0, 0],
        uti1: [0, 0, 0, 0],
        uti2: [0, 0, 0, 0],
        uti3: [0, 0, 0, 0],
        uti4: [0, 0, 0, 0],
        uti5: [0, 0, 0, 0],
        uti6: [0, 0, 0, 0],
        uti7: [0, 0, 0, 0],
        uti8: [0, 0, 0, 0],
        uti9: [0, 0, 0, 0],
        uti10: [0, 0, 0, 0],
        uti11: [0, 0, 0, 0],
        uti12: [0, 0, 0, 0],
      },
      pendenciasSemana: [0, 0, 0, 0],
    },
    {
      data: [
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
      ],
      totalSetor: {
        utineo: 0,
        utiped: 0,
        uti1: 0,
        uti2: 0,
        uti3: 0,
        uti4: 0,
        uti5: 0,
        uti6: 0,
        uti7: 0,
        uti8: 0,
        uti9: 0,
        uti10: 0,
        uti11: 0,
        uti12: 0,
      },
      totalSemana: [0, 0, 0, 0],
      pendenciasSetor: {
        utineo: [0, 0, 0, 0],
        utiped: [0, 0, 0, 0],
        uti1: [0, 0, 0, 0],
        uti2: [0, 0, 0, 0],
        uti3: [0, 0, 0, 0],
        uti4: [0, 0, 0, 0],
        uti5: [0, 0, 0, 0],
        uti6: [0, 0, 0, 0],
        uti7: [0, 0, 0, 0],
        uti8: [0, 0, 0, 0],
        uti9: [0, 0, 0, 0],
        uti10: [0, 0, 0, 0],
        uti11: [0, 0, 0, 0],
        uti12: [0, 0, 0, 0],
      },
      pendenciasSemana: [0, 0, 0, 0],
    },
    {
      data: [
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
      ],
      totalSetor: {
        utineo: 0,
        utiped: 0,
        uti1: 0,
        uti2: 0,
        uti3: 0,
        uti4: 0,
        uti5: 0,
        uti6: 0,
        uti7: 0,
        uti8: 0,
        uti9: 0,
        uti10: 0,
        uti11: 0,
        uti12: 0,
      },
      totalSemana: [0, 0, 0, 0],
      pendenciasSetor: {
        utineo: [0, 0, 0, 0],
        utiped: [0, 0, 0, 0],
        uti1: [0, 0, 0, 0],
        uti2: [0, 0, 0, 0],
        uti3: [0, 0, 0, 0],
        uti4: [0, 0, 0, 0],
        uti5: [0, 0, 0, 0],
        uti6: [0, 0, 0, 0],
        uti7: [0, 0, 0, 0],
        uti8: [0, 0, 0, 0],
        uti9: [0, 0, 0, 0],
        uti10: [0, 0, 0, 0],
        uti11: [0, 0, 0, 0],
        uti12: [0, 0, 0, 0],
      },
      pendenciasSemana: [0, 0, 0, 0],
    },
    {
      data: [
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
      ],
      totalSetor: {
        utineo: 0,
        utiped: 0,
        uti1: 0,
        uti2: 0,
        uti3: 0,
        uti4: 0,
        uti5: 0,
        uti6: 0,
        uti7: 0,
        uti8: 0,
        uti9: 0,
        uti10: 0,
        uti11: 0,
        uti12: 0,
      },
      totalSemana: [0, 0, 0, 0],
      pendenciasSetor: {
        utineo: [0, 0, 0, 0],
        utiped: [0, 0, 0, 0],
        uti1: [0, 0, 0, 0],
        uti2: [0, 0, 0, 0],
        uti3: [0, 0, 0, 0],
        uti4: [0, 0, 0, 0],
        uti5: [0, 0, 0, 0],
        uti6: [0, 0, 0, 0],
        uti7: [0, 0, 0, 0],
        uti8: [0, 0, 0, 0],
        uti9: [0, 0, 0, 0],
        uti10: [0, 0, 0, 0],
        uti11: [0, 0, 0, 0],
        uti12: [0, 0, 0, 0],
      },
      pendenciasSemana: [0, 0, 0, 0],
    },
    {
      data: [
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
      ],
      totalSetor: {
        utineo: 0,
        utiped: 0,
        uti1: 0,
        uti2: 0,
        uti3: 0,
        uti4: 0,
        uti5: 0,
        uti6: 0,
        uti7: 0,
        uti8: 0,
        uti9: 0,
        uti10: 0,
        uti11: 0,
        uti12: 0,
      },
      totalSemana: [0, 0, 0, 0],
      pendenciasSetor: {
        utineo: [0, 0, 0, 0],
        utiped: [0, 0, 0, 0],
        uti1: [0, 0, 0, 0],
        uti2: [0, 0, 0, 0],
        uti3: [0, 0, 0, 0],
        uti4: [0, 0, 0, 0],
        uti5: [0, 0, 0, 0],
        uti6: [0, 0, 0, 0],
        uti7: [0, 0, 0, 0],
        uti8: [0, 0, 0, 0],
        uti9: [0, 0, 0, 0],
        uti10: [0, 0, 0, 0],
        uti11: [0, 0, 0, 0],
        uti12: [0, 0, 0, 0],
      },
      pendenciasSemana: [0, 0, 0, 0],
    },
    {
      data: [
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
      ],
      totalSetor: {
        utineo: 0,
        utiped: 0,
        uti1: 0,
        uti2: 0,
        uti3: 0,
        uti4: 0,
        uti5: 0,
        uti6: 0,
        uti7: 0,
        uti8: 0,
        uti9: 0,
        uti10: 0,
        uti11: 0,
        uti12: 0,
      },
      totalSemana: [0, 0, 0, 0],
      pendenciasSetor: {
        utineo: [0, 0, 0, 0],
        utiped: [0, 0, 0, 0],
        uti1: [0, 0, 0, 0],
        uti2: [0, 0, 0, 0],
        uti3: [0, 0, 0, 0],
        uti4: [0, 0, 0, 0],
        uti5: [0, 0, 0, 0],
        uti6: [0, 0, 0, 0],
        uti7: [0, 0, 0, 0],
        uti8: [0, 0, 0, 0],
        uti9: [0, 0, 0, 0],
        uti10: [0, 0, 0, 0],
        uti11: [0, 0, 0, 0],
        uti12: [0, 0, 0, 0],
      },
      pendenciasSemana: [0, 0, 0, 0],
    },
    {
      data: [
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
        {
          utineo: 0,
          utiped: 0,
          uti1: 0,
          uti2: 0,
          uti3: 0,
          uti4: 0,
          uti5: 0,
          uti6: 0,
          uti7: 0,
          uti8: 0,
          uti9: 0,
          uti10: 0,
          uti11: 0,
          uti12: 0,
        },
      ],
      totalSetor: {
        utineo: 0,
        utiped: 0,
        uti1: 0,
        uti2: 0,
        uti3: 0,
        uti4: 0,
        uti5: 0,
        uti6: 0,
        uti7: 0,
        uti8: 0,
        uti9: 0,
        uti10: 0,
        uti11: 0,
        uti12: 0,
      },
      totalSemana: [0, 0, 0, 0],
      pendenciasSetor: {
        utineo: [0, 0, 0, 0],
        utiped: [0, 0, 0, 0],
        uti1: [0, 0, 0, 0],
        uti2: [0, 0, 0, 0],
        uti3: [0, 0, 0, 0],
        uti4: [0, 0, 0, 0],
        uti5: [0, 0, 0, 0],
        uti6: [0, 0, 0, 0],
        uti7: [0, 0, 0, 0],
        uti8: [0, 0, 0, 0],
        uti9: [0, 0, 0, 0],
        uti10: [0, 0, 0, 0],
        uti11: [0, 0, 0, 0],
        uti12: [0, 0, 0, 0],
      },
      pendenciasSemana: [0, 0, 0, 0],
    },
  ]);

  return (
    <GlobalContext.Provider value={{ tableContext, setTableContext }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  const { tableContext, setTableContext } = context;
  return { tableContext, setTableContext };
}
