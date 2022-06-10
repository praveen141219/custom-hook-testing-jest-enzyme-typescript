import { count } from "console";
import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import useCounter from "./useCounter";

let result: any;
const renderHook = (hook: any) => {
  const HookWrapper = () => {
    result = hook();
    return null;
  };
  shallow(<HookWrapper />);
  return result;
};
test("check counter hook", () => {
  renderHook(useCounter);
  let res = result.count;
  expect(res).toEqual(0);
  const incrementFn = result.increment;
  incrementFn();
  res = result.count;
  expect(res).toEqual(1);
  const decrementFn = result.decrement;
  decrementFn();
  res = result.count;
  expect(res).toEqual(0);
});
