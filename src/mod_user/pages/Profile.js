import React, {useEffect, useState} from 'react';
import UserService from "../../services/user.service";


const Profile = () => {
  const [content, setContent] = useState();
  useEffect(() => {
    UserService.getAdminStatus().then(
    // UserService.getPublicContent().then(
      (response) => {
        setContent(response)
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  },[]);

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
