import React, {useEffect, useState} from "react";
import { useHttpClient } from "../../common/hooks/http-hook";

const Home = () => {
  const API_URL = "http://localhost:3001/api-v1/user/";
  const {isLoading, sendRequest } = useHttpClient();
  const [content, setContent] = useState("");

  useEffect(() => {
    const onLoad = async () => {
      try {
        const responseData = await sendRequest(
          API_URL + "test/all"
        );
        setContent(responseData.message);
      } catch (err) {}
    };
    onLoad()

  },[sendRequest]);

  return (
    <div className={"container"}>
      <header className={"jumbotron"}>
        <div>{content}</div>
      </header>
    </div>
  );
};

export default Home;
