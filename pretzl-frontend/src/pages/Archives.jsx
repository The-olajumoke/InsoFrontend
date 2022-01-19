import React from "react";
import BodyWrapper from "../components/BodyWrapper";
import DiscussionBox from "../components/Discussion/DiscussionBox";
import NoMessageYet from "../components/Discussion/NoMessageYet";
import ResponsiveTop from "../components/ResponsiveTop";
import "../Styling/archives.css";
import { FiArrowLeft, FiFilter } from "react-icons/fi";

function Archives() {
  const handleDots = () => {
    console.log("clicked");
  };

  const archivesList = [
    {
      title: "Price Action in Foreign Exchange",
      date: "Mar 21",
      numberOfPeople: "4",
      name: "Patrick Dempsey",
      code: "51RP70F",
    },
    {
      title: "Price Action in Foreign Exchange",
      date: "Mar 21",
      numberOfPeople: "4",
      name: "Patrick Dempsey",
      code: "51RP70F",
    },
    {
      title: "Price Action in Foreign Exchange",
      date: "Mar 21",
      numberOfPeople: "4",
      name: "Patrick Dempsey",
      code: "51RP70F",
    },
    {
      title: "Price Action in Foreign Exchange",
      date: "Mar 21",
      numberOfPeople: "4",
      name: "Patrick Dempsey",
      code: "51RP70F",
    },
    {
      title: "Price Action in Foreign Exchange",
      date: "Mar 21",
      numberOfPeople: "4",
      name: "Patrick Dempsey",
      code: "51RP70F",
    },
    {
      title: "Types of Mineral Resources",
      date: "Mar 21",
      numberOfPeople: "2",
      name: "Fakomi Idowu",
      code: "89RWT2",
    },
  ];
  return (
    <BodyWrapper>
      <ResponsiveTop title="Archives" dotHandle={handleDots} />
      <div className="arcMain">
        {/* ARCHIVES HEADING*/}
        <div>
          <div>
            <FiArrowLeft />
            <h2>Archives</h2>
          </div>

          <div>
            <FiFilter/>
            <h2>Sort Archives List</h2>
          </div>
        </div>
        <div className="allDisCont ring">
          {archivesList.length < 1 ? (
            <NoMessageYet message="No archived discussion Yet" />
          ) : (
            archivesList.map((dis, index) => (
              <DiscussionBox
              key={index}
                title={dis.title}
                date={dis.date}
                numberOfPeople={dis.numberOfPeople}
                name={dis.name}
                code={dis.code}
              />
            ))
          )}
        </div>
      </div>
    </BodyWrapper>
  );
}

export default Archives;
