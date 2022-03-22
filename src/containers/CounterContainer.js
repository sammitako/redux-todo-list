import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux"; // 상태 조회, dispatch
import { decrease, increase, setDiff } from "../moduels/counrer";

const CounterContainer = () => {
  // state = store.getState(), 리덕스의 현재 상태
  // const { number, diff } = useSelector((state) => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }));

  // useSelector 최적화 (1) - useSelector 따로 써줌
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);

  // useSelector 최적화 (2) - equalityFn: 이전 상태와 다음 상태를 비교하는 함수
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    (left, right) => {
      return left.diff === right.diff && left.number === right.number;
    }
  );

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
