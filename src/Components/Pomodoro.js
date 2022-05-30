import React from "react";
import Slider from "./Slider";
import Timer from "./Timer";
import { SettingsContext } from "./SettingsContext";
import { useState } from "react";

export default function Pomodoro() {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(1);

  return (
    <div>
      <SettingsContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        <Timer />
        <Slider />
      </SettingsContext.Provider>
    </div>
  );
}
