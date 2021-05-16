import { Carousel } from "antd";
import { StateDetails } from "../state";
import "./state-wise.css";

/**
 *
 * @param {{states: State[]}} param0
 * @returns
 */
export function StateWisePage({ states }) {
  return (
    <Carousel autoplay dotPosition={"left"} dots={"dot-style"}>
      {states.map((state, i) => (
        <StateDetails key={i} state={state}></StateDetails>
      ))}
    </Carousel>
  );
}
