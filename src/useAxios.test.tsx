import { waitFor } from "@testing-library/react";
import axios from "axios";
import { shallow } from "enzyme";
import useAxios from "./useAxios";
jest.mock("axios");
const url = "https://jsonplaceholder.typicode.com/users";
let result: any;
const renderHook = (hook: any) => {
  const HookWrapper: React.FC = () => {
    result = hook();
    return null;
  };
  shallow(<HookWrapper />);
  return result;
};

renderHook(useAxios);
test("fetch data resolves", async () => {
  const data = { title: "hello", desc: "have a nice eve" };
  (axios.get as jest.Mock).mockResolvedValue(data);
  const fetch = await result.fetchData(url);
  // console.log(fetch);
  // console.log(result.response);
  expect(fetch).toEqual(data);
});
test("fetch data fails", async () => {
  const error = new Error("error");
  (axios.get as jest.Mock).mockRejectedValue(error);
  const fetch = await result.fetchData(url);
  // console.log(fetch);
  // console.log(result.response);

  expect(fetch).toEqual(error);
});

test("post data resolves", async () => {
  const data = { title: "hello", desc: "have a nice eve" };
  (axios.post as jest.Mock).mockResolvedValue(data);
  const post = await result.postData(url, data);
  // console.log(post);
  // console.log(result.response);

  expect(post).toEqual(data);
});

test("post data fails", async () => {
  const error = new Error("error");
  const data = { title: "hello", desc: "have a nice eve" };
  (axios.post as jest.Mock).mockRejectedValue(error);
  const post = await result.postData(url, data);
  // console.log(post);
  // console.log(result.response);
  expect(post).toEqual(error);
});

test("delete resolves", async () => {
  const data = {};
  const id = 4;
  (axios.delete as jest.Mock).mockResolvedValue(data);
  const del = await result.deleteData(url, id);
  // console.log(del);
  // console.log(result.response);

  expect(del).toEqual(data);
});

test("delete data fails", async () => {
  const error = new Error("error");
  const id = 3;
  (axios.delete as jest.Mock).mockRejectedValue(error);
  const del = await result.deleteData(url, id);
  // console.log(del);
  // console.log(result.response);
  expect(del).toEqual(error);
});

test("update resolves", async () => {
  const data = { title: "hello", desc: "have a nice eve" };
  const id = 4;
  (axios.put as jest.Mock).mockResolvedValue(data);
  const update = await result.updateData(url, id, data);
  // console.log(update);
  // console.log(result.response);
  expect(update).toEqual(result.response); //here we need to provide the mocked response from the axios call
});
test("update data fails", async () => {
  const error = new Error("error");
  const id = 3;
  (axios.put as jest.Mock).mockRejectedValue(error);
  const update = await result.updateData(url, id, {});
  // console.log(update);
  // console.log(result.response);
  expect(update).toEqual(error);
});
