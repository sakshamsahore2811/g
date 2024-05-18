import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center shadow-md">
      <Link to="/">
        <div className="flex items-center p-2">
          <div>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            
          </div>
          <div>
            <div className="times text-base text-center sm:text-left pt-3 pl-3">
              GPS Dukli
              <br />
            </div>
            <div className="times  text-center sm:text-left text-orange-700 pl-3 ">
              Dist. Rupnagar, Punjab
            </div>
          </div>
          
        </div>
        </Link>
        <div className="flex gap-2">
          <div className="p-3 font-thin text-base">
            <a
              href="https://www.facebook.com/p/GPS-DukliBlock-Nangal-100071956231603/?paipv=0&eav=Afanr1X8lB-ks9DTPM3geN_Me0UvpWYc9QzHuZl-ZoY7NS3pH6rV0VS2HeQXtuinzxQ&_rdr"
              target="_blank"
            >
              Facebook
            </a>
          </div>
          <div className="p-3 font-thin text-base"><Link to="/directions">Directions</Link></div>
          <div className="p-3 font-thin text-base"><Link to="/gallery">Gallery</Link></div>
        </div>
      </div>
    </>
  );
}
