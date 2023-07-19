import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return <div className="Phonetic mb-3">[{props.phonetic.text}]</div>;
}
