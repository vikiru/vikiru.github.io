import React from "react";

function HomePage() {
  return (
    <main className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth bg-gradient-to-r from-red-500 to-teal-400 scrollbar scrollbar-track-teal-400 scrollbar-thumb-red-500">
      <div className="mx-2 my-12 rounded-lg py-4 ">
        <div className="max-w-5xl">
          <h2 className="text-center font-heading text-8xl font-bold tracking-widest">
            Visakan Kirubakaran
          </h2>
        </div>
        <div>
          <div className="m-4 mx-auto max-w-xs rounded-full bg-white hover:bg-black hover:text-white">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <h2 className="text-center font-heading font-thin uppercase">
                Home
              </h2>
            </a>
          </div>
          <div className="duration-400 m-4 mx-auto max-w-xs rounded-full bg-white transition-colors hover:bg-black hover:text-white">
            <a href="/about" target="_blank" rel="noopener noreferrer">
              <h2 className="text-center font-heading font-thin uppercase">
                About
              </h2>
            </a>
          </div>
          <div className="m-4 mx-auto max-w-xs rounded-full bg-white hover:bg-black hover:text-white">
            <a href="/projects" target="_blank" rel="noopener noreferrer">
              <h2 className="text-center font-heading font-thin uppercase">
                Projects
              </h2>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
export default HomePage;
