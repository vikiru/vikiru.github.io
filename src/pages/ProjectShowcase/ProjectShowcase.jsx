import PropTypes from "prop-types";
import React from "react";

function ProjectShowcasePage(props) {
  console.log(props);
  return (
    <main className="h-screen w-screen snap-y overflow-x-hidden overflow-y-scroll scroll-smooth bg-gradient-to-r from-red-500 to-teal-400 pb-4 scrollbar scrollbar-track-teal-400 scrollbar-thumb-red-500"></main>
  );
}

ProjectShowcasePage.propTypes = {
  project: PropTypes.object,
};

export default ProjectShowcasePage;
