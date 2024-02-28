import "./App.css";
import { Button } from "./components/Button";


import { MyTitle } from "./components/Title";

function App() {
  return (
    <>
      <MyTitle label="Storybook Demo" />
      <Button label="Request Demo" variant="primary"/>
      <Button label="Request Demo" variant="secondary"/>
      <Button label="Download Now" variant="icon"/>
  
    </>
  );
}

export default App;
