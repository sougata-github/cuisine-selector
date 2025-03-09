"use client";

import { cuisines, cuisineType } from "@/data";
import { Badge } from "./ui/badge";
import { useState } from "react";

const Cuisines = () => {
  const [selected, setSelected] = useState<cuisineType[]>([]);

  const handleToggleCuisine = (cuisine: cuisineType) => {
    setSelected((prev: cuisineType[]) =>
      prev.includes(cuisine)
        ? prev.filter((c) => c !== cuisine)
        : [...prev, cuisine]
    );
  };

  return (
    <section className="py-8 mt-4 max-w-xl">
      <ul className="w-full flex flex-wrap gap-4 items-center">
        {cuisines.map((cuisine) => (
          <Badge
            className="cursor-pointer p-2 transition-colors"
            key={cuisine}
            onClick={() => handleToggleCuisine(cuisine)}
            variant={selected.includes(cuisine) ? "default" : "secondary"}
          >
            <span className="text-sm">{cuisine}</span>
          </Badge>
        ))}
      </ul>
    </section>
  );
};

export default Cuisines;
