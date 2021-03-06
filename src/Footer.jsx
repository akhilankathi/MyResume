import axios from "axios";
import React, { useEffect, useState } from "react";

export const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/footer").then(({ data }) => {
      setFooterData(data);
    });
  }, []);
  return (
    <div>
      <footer className="pt-5">
        <div className="container text-center py-5">
          <div className="row px-4">
            <div className="col-lg-7 mx-auto">
              <h2 className="text-uppercase mb-0">AKHIL ANKATHI </h2>
              <h6 className="text-primary text-uppercase mb-0 letter-spacing-3">
                Full Stack Developer
              </h6>
              <p className="text-muted my-4">
              I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices.
              </p>
              <ul className="list-inline mb-0">
                {footerData.map((e) => {
                  return (
                    <li className="list-inline-item">
                      <a className="social-link" href="#!">
                        <i className={e}></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="copyrights px-4">
          <div className="container py-4 border-top text-center">
            <p className="mb-0 text-muted py-2">
              &copy; All rights reserved. Template designed by{" "}
              <a href="https://bootstrapious.com/p/bootstrap-resume">
                Bootstrapious
              </a>
              .{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
