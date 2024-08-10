"use client";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import Animation from "./Animation - 1723199716467.json";
import Typewriter from "typewriter-effect";



export default function Home() {
  return (
    <main>
      <div>
        <div className="min-h-screen p-5 relative bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]  shadow-blue-500">
          <div className="flex justify-center items-center w-full h-52 my-12">
            <Lottie className="size-96" loop={true} animationData={Animation} />{" "}
            {/* for Lottle animation file and lottie functions*/}
          </div>

          {/* <div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 "></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div> */}

          <div className="flex justify-center w-full my-6 text-5xl">
            <h1>
              <span className="text-blue-500">Your</span> Home{" "}
              <span className="text-blue-500">Away</span> From
            </h1>
            <div className="w-[10px] h-[50px]"></div>
            <span className="text-blue-500">
              <Typewriter
                options={{
                  strings: ["Home....", "Mom....", "Dad....", "Yourself...."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>

            {/* <h1 class="tagline"><span className="text-blue-600">Your</span> Home <span className="text-blue-600">away</span> from <span className="text-blue-600">Home</span>
              </h1> */}
          </div>

          <div className=" flex justify-center align-center gap-5 mb-7">
            <div class="min-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white flex justify-center items-center mb-7">
                    Thane
                  </h5>
                </a>

                <Link href={"/Thane"}>
                  <button
                    href="#"
                    class="text-white bg-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover:text-white justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>

            <div class="max-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white flex justify-center items-center mb-7">
                    Vasai
                  </h5>
                </a>

                <Link href={"/Thane"}>
                  <button
                    href="#"
                    class="text-white bg-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover:text-white justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>

            <div class="max-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white flex justify-center items-center mb-7">
                    Santacruz
                  </h5>
                </a>

                <Link href={"/Thane"}>
                  <button
                    href="#"
                    class="text-white bg-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover:text-white justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>

            <div class="max-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white flex justify-center items-center mb-7">
                    Kalyan
                  </h5>
                </a>

                <Link href={"/Thane"}>
                  <button
                    href="#"
                    class="text-white bg-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover:text-white justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>

            <div class="max-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white flex justify-center items-center mb-7">
                    Malad
                  </h5>
                </a>

                <Link href={"/Thane"}>
                  <button
                    href="#"
                    class="text-white bg-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover:text-white justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Why use us */}
          <div className="flex justify-center space-x-10 flex items-center mt-40">
            <hr className="w-1/4 opacity-7" />
            <div className="text-2xl">Why Use Holmes</div>
            <hr className="w-1/4 opacity-7 flex items-center" />
          </div>
          <div className="flex justify-around mt-10 ml-10">
            <div>
              <Image
                src={"/handshake.gif"}
                width={90}
                height={90}
                className="rounded-full mb-5"
              />
              <h1>Trusted PG's</h1>
            </div>

            <div>
              <Image
                src={"/employee.gif"}
                width={90}
                height={90}
                className="rounded-full mb-5 ml-4"
              />
              <h1>Verified Owners</h1>
            </div>

            <div>
              <Image
                src={"/school.gif"}
                width={90}
                height={90}
                className="rounded-full mb-5 ml-9"
              />
              <h1>Authorized By Colleges</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
