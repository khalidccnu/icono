import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import imgPageNotFound from "./assets/page-not-found.png";

const Error = () => {
  const { status, statusText } = useRouteError();
  const navigate = useNavigate();

  return (
    <section className="py-10">
      <div className="container">
        <div className="card bg-white text-[#183153] max-w-xs mx-auto">
          <figure>
            <img src={imgPageNotFound} alt="" />
          </figure>
          <div className="card-body -mt-5 text-center">
            <h2 className="card-title justify-center">Oops!</h2>
            <span className="font-semibold">
              {status && statusText ? status + " " + statusText : null}
            </span>
            <span className="text-gray-500">An error has occurred!</span>
            <div className="card-actions justify-center">
              <button
                type="button"
                className="btn btn-xs bg-[#183153] hover:bg-transparent text-white hover:text-[#183153] !border-[#183153] rounded normal-case"
                onClick={() => navigate("/")}
              >
                <FaHome />
                <span className="mt-1">Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
