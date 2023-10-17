import React, { useState } from "react";
import { Izpalace } from "../Izpalace/Izpalace";
import { IztrolabeProps } from "./Iztrolabe.type";
import { IzpalaceCenter } from "../IzpalaceCenter";
import classNames from "classnames";
import { useIztro } from "iztro-hook";
import "./Iztrolabe.css";
import "../theme/default.css";

export const Iztrolabe: React.FC<IztrolabeProps> = (props) => {
  const [focusedIndex, setFocusedIndex] = useState<number>();
  const { astrolabe, horoscope } = useIztro({
    birthday: props.birthday,
    birthTime: props.birthTime,
    gender: props.gender,
    birthdayType: props.birthdayType,
    fixLeap: props.fixLeap,
    isLeapMonth: props.isLeapMonth,
    lang: props.lang,
  });

  return (
    <div
      className={classNames("iztro-astrolabe", "iztro-astrolabe-theme-default")}
    >
      {astrolabe?.palaces.map((palace, index) => {
        return (
          <Izpalace
            key={palace.earthlyBranch}
            index={index}
            focusedIndex={focusedIndex}
            onFocused={setFocusedIndex}
            horoscope={horoscope}
            {...palace}
          />
        );
      })}
      <IzpalaceCenter astrolabe={astrolabe} />
    </div>
  );
};
