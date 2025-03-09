"use client";

import { colors, colorsType } from "@/data";
import { useLocaleStorage } from "@/hooks/useLocaleStorage";
import { createContext, useContext, useEffect } from "react";

type ColorContextType = {
  color: string;
  handleSetColor: (color: colorsType) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useLocaleStorage<colorsType>(
    "color",
    colors[colors.length - 1]["label"]
  );

  const handleSetColor = (color: colorsType) => {
    setColor(color);
  };

  useEffect(() => {
    const root = document.documentElement;
    const previousColor = root.dataset.color;

    if (previousColor) {
      root.classList.remove(`${previousColor}`);
    }

    root.classList.add(`${color}`);
    root.dataset.color = color;
  }, [color]);

  return (
    <ColorContext.Provider value={{ color, handleSetColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export function useColor() {
  const value = useContext(ColorContext);

  if (!value) throw new Error("Cannot use context outisde provider.");

  return value;
}
