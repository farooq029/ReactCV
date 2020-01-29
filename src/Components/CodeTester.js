import React from "react";
const myData = [
  {
    ProfileImg: "",
    Name: "Anees Ahmad",
    DOB: "11 july Windows 1.0",
    Address: "A JavaScript library for building user interfaces",
    Phone: "+46 793377955",
    Email: "inbox.a.ahmad@live.com",
    WebSite: "www.iLoveMyParents.com"
  }
];

const Frameworks = () => (
  <div>
    {myData.map(item => (
      <div key={item.id}>
        <div>{item.DOB}</div>
        <div>{item.Name}</div>
        <div>{item.Address}</div>
        <div>{item.Phone}</div>
        <div>{item.Email}</div>
        <div>{item.WebSite}</div>
      </div>
    ))}
  </div>
);

export default Frameworks;
