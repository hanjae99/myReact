import React from "react";
import InputSample from "./components/InputSample";
import EventHandling from "./components/EventHandling";
import EventPractice from "./components/EventPractice";

export const App = () => {
  return (
    <div>
      <InputSample></InputSample>
      <EventHandling />
      <EventPractice />
    </div>
  );
};

export default App;
