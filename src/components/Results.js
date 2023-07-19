import React from "react";
import Meaning from "./Meaning";
import "../App.css";
import Phonetic from "./Phonetics";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="word">
        <h2 className="text-4xl mb-3">{props.definition.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
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
