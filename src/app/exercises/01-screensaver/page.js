import React from "react";
import Link from "next/link";
import COLORS from "./css_colors";

function ScreenSaverExercise() {
  return (
    <main>
      <p>Choose your color:</p>
      <ul>
        {Object.entries(COLORS).map(([color]) => {
          const backgroundColor = color === "Black" ? "white" : "unset";
          const style = {
            color,
            backgroundColor,
          };

          return (
            <li key={color} style={{ color }}>
              <Link href={`01-screensaver/${color}`} style={style}>
                {color}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
