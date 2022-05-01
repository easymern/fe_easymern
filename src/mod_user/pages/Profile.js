import React, {useEffect, useState} from 'react';
import { useHttpClient } from "../../common/hooks/http-hook";
import authHeader from "../../common/services/auth-header";

import UserService from "../../common/services/user-service";


const Profile = () => {
  const API_URL = "http://localhost:3001/api-v1/user/";
  const {isLoading, sendRequest } = useHttpClient();
  const [content, setContent] = useState();

  useEffect(() => {
    const onLoad = async () => {
      try {
        const responseData = await sendRequest(
          API_URL + "test/mod",
          "GET",
          null,
          authHeader()
        );
        setContent(responseData.message);
      } catch (err) {}
    };
    onLoad()

  },[sendRequest]);


  return (
    <div className={"card"}>
      <div className={"card-body"}>
        <h3>User Profile</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Profile;
