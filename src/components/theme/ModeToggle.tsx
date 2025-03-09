"use client";

import * as React from "react";
import { Moon, PaintBucket, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { useColor } from "../context/ColorContext";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { colors } from "@/data";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const { color: currentColor, handleSetColor } = useColor();

  return (
    <>
      <Popover>
        <PopoverTrigger asChild className="max-md:hidden">
          <Button variant="secondary" size="icon">
            <PaintBucket />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-110 rounded-xl mt-36 xl:mt-42 mr-0.5 max-md:hidden"
          side="left"
        >
          <div className="flex flex-col gap-4 py-4">
            <p className="text-sm">Color</p>
            <ul className="flex-wrap flex gap-4">
              {colors.map((color) => (
                <Button
                  key={color.label}
                  variant={
                    currentColor === color.label ? "secondary" : "outline"
                  }
                  className="w-28"
                  onClick={() => handleSetColor(color.label)}
                >
                  <div
                    className="size-3.5 md:size-4 p-1 rounded-full"
                    style={{
                      backgroundColor: `${color.value}`,
                    }}
                  />
                  <span className="capitalize">{color.label}</span>
                </Button>
              ))}
            </ul>

            <p className="text-sm">Theme</p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant={theme === "light" ? "secondary" : "outline"}
                className="w-26"
                onClick={() => setTheme("light")}
              >
                <Sun className="size-3.5 md:size-4" />
                <span className="capitalize">Light</span>
              </Button>
              <Button
                variant={theme === "dark" ? "secondary" : "outline"}
                className="w-26"
                onClick={() => setTheme("dark")}
              >
                <Moon className="size-3.5 md:size-4" />
                <span className="capitalize">Dark</span>
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* small screens */}
      <Drawer>
        <DrawerTrigger asChild className="md:hidden">
          <Button variant="secondary" size="icon">
            <PaintBucket />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="md:hidden">
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-4 pt-4 pb-10 px-4">
            <p className="text-sm">Color</p>
            <ul className="flex-wrap flex gap-4">
              {colors.map((color) => (
                <Button
                  key={color.label}
                  variant={
                    currentColor === color.label ? "secondary" : "outline"
                  }
                  className="w-fit md:w-27"
                  onClick={() => handleSetColor(color.label)}
                >
                  <div
                    className="size-3.5 md:size-4 p-1 rounded-full"
                    style={{
                      backgroundColor: `${color.value}`,
                    }}
                  />
                  <span className="capitalize">{color.label}</span>
                </Button>
              ))}
            </ul>

            <p className="text-sm">Theme</p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant={theme === "light" ? "secondary" : "outline"}
                className="w-26"
                onClick={() => setTheme("light")}
              >
                <Sun className="size-3.5 md:size-4" />
                <span className="capitalize">Light</span>
              </Button>
              <Button
                variant={theme === "dark" ? "secondary" : "outline"}
                className="w-26"
                onClick={() => setTheme("dark")}
              >
                <Moon className="size-3.5 md:size-4" />
                <span className="capitalize">Dark</span>
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
