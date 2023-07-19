import React from "react";
import Meaning from "./Meaning";
import "../App.css";
import Phonetic from "./Phonetics";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="results">
        <div className="top rounded-xl border-neutral-200 bg-neutral-50 border-2 p-10 shadow-sm text-black tracking-wider">
          <h2 className=" container text-4xl">{props.definition.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </div>
        <div className="results rounded-xl border-neutral-200 bg-neutral-50 border-2 p-10 shadow-sm text-black tracking-wider mt-4">
          {props.definition.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
