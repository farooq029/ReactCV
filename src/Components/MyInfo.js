import { SocialIcon } from "react-social-icons";

/* import React from "react";
import { SocialIcon } from "react-social-icons";

const Info = () => {
  const email = "inbox.a.ahmad@gmail.com";
  return (
    <sidebar>
      <section className="info">
        <h1>Anees Ahmad</h1>
        <dl>
          <dt>D.O.B:</dt>
          <dd>4th January 1982</dd>
          <dt>Address:</dt>
          <dd>123 Street Address</dd>
          <dd>Town/City</dd>
          <dd>State/Country</dd>
          <dd>Post/Zip Code</dd>
          <dt>Phone</dt>
          <dd>021 1234 5678</dd>
          <dt>Email:</dt>
          <dd>{email}</dd>
          <dt>Website</dt>
          <dd>www.yourwebsite.com</dd>
        </dl>
        <div className="social-media">
          <br />
          <SocialIcon url="https://www.facebook.com/ahmad.anis.524" />
          <SocialIcon url="https://www.linkedin.com/" />
          <SocialIcon url="https://mail.google.com/" />
          <SocialIcon url="https://www.whatsapp.com/" />
          <SocialIcon url="https://www.github.com/" />
          <SocialIcon url="https://www.tumblr.com/" />
        </div>
      </section>
    </sidebar>
  );
};

export default Info; */

import React from "react";
const myData = [
  {
    ProfileImg: "",
    Name: " Farooq Hayat",
    DOB: "05 march",
    Address: "Hästskogatan 1, 21377 Malmö",
    Phone: "+46 764425225",
    Email: "farooqhayat12@gmail.com",
    WebSite: "www.farooq.com"
  }
];

const Frameworks = () => (
  <div className="leftSideBar">
    <div className="info">
      {myData.map(item => (
        <div key={item.id}>
          <h1>{item.Name}</h1>
          <dt>D.O.B:</dt>
          <dd>{item.DOB}</dd>
          <dt>Address:</dt>
          <dd>{item.Address}</dd>
          <dt>Phone</dt>
          <dd>{item.Phone}</dd>
          <dt>Email:</dt>
          <dd>{item.Email}</dd>
          <dt>Website</dt>
          <dd>{item.WebSite}</dd>
        </div>
      ))}
    </div>
    <div className="social-media">
      <br />
      <SocialIcon url="https://www.facebook.com/" />
      <SocialIcon url="https://www.linkedin.com/" />
      <SocialIcon url="https://mail.google.com/" />
      <SocialIcon url="https://www.whatsapp.com/" />
      <SocialIcon url="https://www.github.com/" />
      <SocialIcon url="https://www.tumblr.com/" />
    </div>
  </div>
);

export default Frameworks;
