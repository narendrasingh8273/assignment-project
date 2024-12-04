import React from "react";

const statsData = [
  {
    count: "123+",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    count: "12+",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    count: "12+",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    count: "12+",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
];

const StatsSection = () => {
  return (
    <div className="stats-section">
      {statsData.map((stat, index) => (
        <div className="stat" key={index}>
          <h5>{stat.title}</h5>
          <h3>{stat.count}</h3>
          <h4>{stat.title}</h4>
          <p>{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
