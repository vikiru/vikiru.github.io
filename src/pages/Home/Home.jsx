import Footer from "../../components/Footer/Footer";
import NavBar from "./../../components/NavBar/NavBar";
import React from "react";

function HomePage() {
  return (
    <div className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth bg-white">
      <NavBar />
      <main className="h-screen">
        <div className="flex justify-center py-2">
          <h2 className="font-cinzel text-8xl tracking-widest text-black">
            Visakan Kirubakaran
          </h2>
        </div>

        <div className="flex justify-center py-1">
          <h3 className="font-heading text-5xl font-thin text-black">
            Software Developer
          </h3>
        </div>

        <div className="mx-auto max-w-lg py-1">
          <p className="text-center font-body text-4xl text-black">
            I have a passion for software design and web technologies. Committed
            to learning and contributing to meaningful projects!
          </p>
        </div>

        <div className="flex justify-center gap-2 py-4">
          <div className="w-60 rounded-full bg-blue-400 p-2 hover:cursor-pointer hover:ring-4">
            <a href="/about" target="_blank" rel="noopener noreferrer">
              <h2 className="text-center text-2xl uppercase text-white">
                Read More
              </h2>
            </a>
          </div>
          <div className="w-60 rounded-full bg-orange-400 p-2 hover:cursor-pointer hover:ring-4">
            <h2 className="text-center text-2xl uppercase text-white">
              View My Work
            </h2>
          </div>
          <div className="w-60 rounded-full bg-green-400 p-2 hover:cursor-pointer hover:ring-4">
            <a
              href="mailto:viskirubakaran@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              id="email"
            >
              <h2 className="text-center text-2xl uppercase text-white">
                Contact Me
              </h2>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default HomePage;
