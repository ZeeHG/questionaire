import React, { FC } from "react";
import { useParams } from "react-router-dom";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
const Edit: FC = () => {
  const { id } = useParams();
  const { loading, data } = useLoadQuestionData();
  return <div>{loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}</div>;
};
export default Edit;
