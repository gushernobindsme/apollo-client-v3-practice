import React from "react";
import {Icon} from "@blueprintjs/core";

export type RatingsProps = {
  id: number,
  rate: number,
  mutation(id: number, rate: number): void,
};

const Ratings: React.FC<RatingsProps> = ({id, rate, mutation}) => {
  return (
    <>
      <Icon icon={rate >= 1 ? 'star' : 'star-empty'}
            onClick={() => {
              mutation(id, 1);
            }}/>
      <Icon icon={rate >= 2 ? 'star' : 'star-empty'}
            onClick={() => {
              mutation(id, 2);
            }}/>
      <Icon icon={rate >= 3 ? 'star' : 'star-empty'}
            onClick={() => {
              mutation(id, 3);
            }}/>
      <Icon icon={rate >= 4 ? 'star' : 'star-empty'}
            onClick={() => {
              mutation(id, 4);
            }}/>
      <Icon icon={rate >= 5 ? 'star' : 'star-empty'}
            onClick={() => {
              mutation(id, 5);
            }}/>
    </>
  );
};

export default Ratings;