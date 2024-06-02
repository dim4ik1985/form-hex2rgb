import classes from "./App.module.css";
import React, { useState } from "react";
import { isValid } from "./validator.ts";
import { convertor } from "./convertor.ts";

export const App = () => {
  const [colorChange, setColor] = useState<string | number[]>("");
  const [error, setError] = useState(false);

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setColor(value);
    if (isValid(value)) {
      setColor(`rgb(${convertor(value)[0]}, ${convertor(value)[1]}, ${convertor(value)[2]})`);
      setError(false);
      return;
    }
    if (value.length > 6) {
      setError(true);
      return;
    }
    setError(false);
    setColor("");
  };
  return (
    <div
      className={classes["form_color"]}
      style={error ? { backgroundColor: "#e74a35" } : { backgroundColor: `${colorChange}` }}
    >
      <div className={classes["container"]}>
        <form className={classes["form_color-input"]}>
          <input
            className={classes["form-input"]}
            id={"colorChange"}
            name={"colorChange"}
            onChange={handlerInput}
          />
        </form>
        <div
          className={classes["form_color-convert"]}
          style={
            colorChange === ""
              ? { backgroundColor: colorChange }
              : { backgroundColor: `rgba(0, 0, 0, .6)` }
          }
        >
          {error ? "Ошибка!" : colorChange}
        </div>
      </div>
    </div>
  );
};
