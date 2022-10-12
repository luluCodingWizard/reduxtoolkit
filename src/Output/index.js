import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Output() {
  const count = useSelector((state) => state.countSliceReducer.count);

  return <div>Output goes here for count:{count}</div>;
}
