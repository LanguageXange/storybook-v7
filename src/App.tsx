import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Switch } from "./components/Switch";


import { MyTitle } from "./components/Title";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col mx-auto w-3/4 border-2 my-6 p-4">
      <MyTitle label="Storybook Demo" />
      <Button label="Request Demo" variant="primary" />
      <Button label="Request Demo" variant="secondary"/>
      <Button label="Download Now" variant="icon" iconType="download"/>
      <Button label="Bookmark Now" variant="icon" iconType="bookmark"/>
  

  <Switch isOpen={isOpen} onToggle={handleToggle}/>
    </div>
  );
}

export default App;
