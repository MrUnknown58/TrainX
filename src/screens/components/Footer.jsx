import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TextField from '@mui/material/TextField';

const Footer = () => {
  return (
<footer className="bg-white">
  <div className="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
    <div className="lg:flex lg:items-start lg:gap-8">
      <div className="text-black py-4 text-3xl">
        TrainX
      </div>
      <div
        className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16"
      >
        <div className="col-span-2">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
            Planning on your next trip ?
            </h3>
            <p className="mt-4 text-gray-500">
           Subscribe to our newsletter to get the latest updates
            </p>
          </div>
        </div>

        <div className= "w-full">
             <TextField id="standard-basic" label="Email" variant="standard" />
        </div>
        <button >
                Sign Up
              </button>

        <div className="col-span-2 sm:col-span-1">
          <p className="font-medium text-gray-900">About us</p>
          </div>

      

        <div className="col-span-2 sm:col-span-1">
          <p className="font-medium text-gray-900">Company</p>
          </div>

  
        <div className="col-span-2 sm:col-span-1">
          <p className="font-medium text-gray-900">Services</p></div>


        <div className="col-span-2 sm:col-span-1">
          <p className="font-medium text-gray-900">Legal</p></div>

        <div className="col-span-2 sm:col-span-1">
          <p className="font-medium text-gray-900">Term of use</p></div>

        <div className="flex justify-end items-end ga">
        <span className="sr-only">Facebook</span>
                <FacebookIcon/>
              <span className="sr-only">Instagram</span>
    <InstagramIcon/>
              <span className="sr-only">GitHub</span>
              <GitHubIcon/>
        </div>
  
    </div>
    </div>

    <div className="mt-8 border-t border-gray-100 pt-8">
      <div className="sm:flex sm:justify-between">
        <p className="text-xs text-gray-500">
          &copy; 2022. Company Name. All rights reserved.
        </p>

        <ul
          className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end"
        >
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Terms & Conditions
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Privacy Policy
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75">
              Cookies
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  );
}

export default Footer


 