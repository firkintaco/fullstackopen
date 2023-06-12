import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const allFeedbacks = good + neutral + bad;

  if (allFeedbacks === 0) {
    return <h3>Zero feedback given</h3>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="All" value={allFeedbacks} />
        <StatisticLine text="Average" value={(good - bad) / allFeedbacks} />
        <StatisticLine
          text="Positive"
          value={`${(good / allFeedbacks) * 100} %`}
        />
      </tbody>
    </table>
  );
};

export default Statistics;
