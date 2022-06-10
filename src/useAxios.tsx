import axios from "axios";
import * as React from "react";
const useAxios = () => {
  const [response, setResponse] = React.useState<any>();
  const fetchData = async (url: string) => {
    try {
      const result = await axios.get(url);
      setResponse(result);
      return result;
    } catch (err) {
      setResponse(err);
      return err;
    }
  };
  const postData = async (url: string, user: any) => {
    try {
      const result = await axios.post(url, user);
      setResponse(result);
      return result;
    } catch (err) {
      setResponse(err);
      return err;
    }
  };
  const updateData = async (url: string, id: number, user: any) => {
    try {
      const result = await axios.put(`${url}/${id}`, user);
      setResponse(result);
      return result;
    } catch (err) {
      setResponse(err);
      return err;
    }
  };
  const deleteData = async (url: string, id: number) => {
    try {
      const result = await axios.delete(`${url}/${id}`);
      setResponse(result);
      return result;
    } catch (err) {
      setResponse(err);
      return err;
    }
  };
  return { response, fetchData, postData, deleteData, updateData };
};

export default useAxios;
