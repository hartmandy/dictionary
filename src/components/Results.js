import React from "react";
import Meaning from "./Meaning";
import "../App.css";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="word">
        <h2 className="text-4xl mb-3 font-bold">{props.definition.word}</h2>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
