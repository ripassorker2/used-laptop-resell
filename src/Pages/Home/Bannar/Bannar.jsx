import React from "react";
import { Link } from "react-router-dom";

const Bannar = () => {
  return (
    <div>
      <div className="-z-20">
        <section className="relative bg-[url(https://media.loom-app.com/gizmodo/dist/images/2018/12/03/1811203-MacBookAir-top.jpg?w=1280)]  bg-cover bg-center bg-no-repeat">
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
                Global Sources offers with a wide range of quality products,
                sourced directly from Asia. Source for high quality products at
                competitive price from Verified Suppliers now. Vertical Focus
                Expertise. 10,000,000+ Buyers. Verified Suppliers. 50+ Years of
                Experience.
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
