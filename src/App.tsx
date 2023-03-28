import React from "react";
import { useEventLink } from "./useEventLink";

function App() {
  const { open } = useEventLink();
  return <button onClick={open}>Click me!</button>;
}

export default App;
