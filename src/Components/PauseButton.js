import PauseImage from "../img/video-pause-button.png";

export default function PauseButton(props) {
  return (
    <button {...props}>
      <img src={PauseImage} alt="" />
    </button>
  );
}
