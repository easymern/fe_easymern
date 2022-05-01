import React from 'react';

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('userData'));
  // console.log("auth-header token: ", user.token)

  if (user && user.token) {
    return {
      'x-access-token': user.token,
      'Access-Control-Allow-Origin': true
    };
  } else {
    return {};
  }
};

export default authHeader;
