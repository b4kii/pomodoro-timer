import PauseImage from "../img/play-button.png";

export default function PlayButton(props) {
  return (
    <button {...props}>
      <img src={PauseImage} alt="Play Button" />
    </button>
  );
}
