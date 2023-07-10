import "./App.css";
import {
  BtnFill,
  BtnOutlined,
  BtnOutlinedDark,
  Inp,
  SubBtn,
  TagFill,
  TagFillDark,
  TagOutlined,
} from "./Components/Btn";
import {
  Client,
  Feedback,
  Global,
  Hire,
  Increment,
  NumIcon,
  Time,
} from "./Components/HighlightIcons/Icon";

function App() {
  return (
    <div className="App box-border">
      <BtnFill />
      <BtnOutlined />
      <TagFill />
      <TagOutlined />
      <TagFillDark />
      <Inp />
      <SubBtn />

      <div className="bg-primary-900 p-5 my-2">
        <BtnOutlinedDark />
      </div>
      <div className="flex flex-wrap">
        <Client />
        <Time />
        <Hire />
        <Feedback />
        <Increment />
        <NumIcon />
        <Global />
      </div>
    </div>
  );
}

export default App;
