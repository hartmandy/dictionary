import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return <div className="mt-3 text-xs">{props.phonetic.text}</div>;
}
