import React from "react";
import { useSelector, shallowEqual } from "react-redux";

const Wrapper = ({ children }) => (
  <div data-testid="score-board">{children}</div>
);

const Content = ({ emoji, emojiLabel, text }) => (
  <Wrapper>
    <section aria-label="Score board" className="result">
      <span className="emoji" role="img" aria-label={emojiLabel}>
        {emoji}
      </span>
      <span className="text">{text}</span>
    </section>
  </Wrapper>
);

function Result() {
  const { result, loading } = useSelector((state) => state.app, shallowEqual);

  if (result === null && !loading) return <Wrapper />;
  else if (loading) {
    return (
      <Content
        emoji="⏱"
        emojiLabel="Stopwatch"
        text={`Simulating, please wait...`}
      />
    );
  }
  return (
    <Content
      emoji={result > 0 ? "🎉" : "💔"}
      emojiLabel={result > 0 ? "Celebration" : "Broken heart"}
      text={` Winning chances are ${result}%`}
    />
  );
}

export default Result;
