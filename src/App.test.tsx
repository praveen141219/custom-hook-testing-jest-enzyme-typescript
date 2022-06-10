import { shallow } from "enzyme";
import App from "./App";
let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<App />);
});
test("renders learn react link", () => {
  const count = wrapper.find(`[data-testid="count"]`);
  expect(count.text()).toEqual("0");
});
test("increment", () => {
  let count = wrapper.find(`[data-testid="count"]`);
  const incrementBtn = wrapper.find(`[data-testid="increment-btn"]`);
  const decrementBtn = wrapper.find(`[data-testid="decrement-btn"]`);
  expect(count.text()).toEqual("0");
  incrementBtn.simulate("click");
  count = wrapper.find(`[data-testid="count"]`);
  expect(count.text()).toEqual("1");
  decrementBtn.simulate("click");
  count = wrapper.find(`[data-testid="count"]`);
  expect(count.text()).toEqual("-1");
});
