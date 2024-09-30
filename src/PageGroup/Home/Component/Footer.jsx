/* eslint-disable no-unused-vars */
import React from "react";
import Map from "./Map";
import MainFooter from "./MainFooter";

const Footer = () => {
  return (
    <div className="main-footer bg-black-deep text-center text-white dark:text-neutral-200 ">
      <div className="reach-label font-bold dark:border-neutral-500">
        <span>HOW TO REACH US?</span>
      </div>

      <div className="mx-8 py-12 text-center md:text-left">
        <div className="grid-col-4 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <Map />
          {/*  Contact section  */}
          <div className="col-span-1">
            <h6 className="mb-4 flex justify-center font-bold  md:justify-start">
              <span className="footer-touch-heading">GET IN TOUCH</span>
            </h6>
            <div className="">
              <p className="mb-2 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="contact-icons-main mr-3 h-7 w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                +91 (11) 26981717, 26984617
              </p>
              <p className="mb-2 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="contact-icons-main mr-3 h-7 w-7"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                computerengg@jmi.ac.in
              </p>
              <p className="item-center mb-2 flex justify-center md:justify-start">
                <svg
                  fill="#ffffff"
                  className="contact-icons-main mr-3 h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 395.71 395.71"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>
                    </g>{" "}
                  </g>
                </svg>
                Department of Computer Engineering,
                <br />
                Jamia Milla Islamia,New Delhi,
                <br />
                Delhi - 10025 India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
