import React from "react";
import { Link } from "react-router-dom";

const Bannar = () => {
  return (
    <div>
      <div className="-z-20">
        <section className="relative bg-[url(https://d3m9l0v76dty0.cloudfront.net/system/photos/6731538/original/88fd2ca4400835bf74f12070e580b70e.jpg)] h-[600px] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0  bg-transparent bg-gradient-to-r from-black/70 to-white/25"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center sm:text-left">
              <h1 className="text-3xl font-extrabold md:text-gray-200 md:text-6xl">
                <span className="text-purple-800"> Welcome</span> to{" "}
                <span className="text-purple-800"> Used</span>
                <strong className="block font-extrabold  py-3">
                  Laptop <span className="text-purple-800"> Zone</span>
                </strong>
              </h1>

              <p className="mt-4 max-w-lg sm:text-base text-gray-200 sm:leading-relaxed">
                Tourism, the act and process of spending time away from home in
                pursuit of recreation, relaxation, and pleasure, while making
                use of the commercial provision of services. As such, tourism is
                a product of modern social
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                {/* <Link
                  to={"/services"}
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Our Services
                </Link> */}

                <Link className="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bannar;
