import Track from "./Track";
import { ReactComponent as TrackIcon } from "../../../assets/svg/TrackIcon.svg";

export default function TrackDropDown(props) {
  // Handling Track Selector Input

  const handleTrackInput = (e) => {
    if (e.target.checked) {
      props.setIsDataLoaded(false);
      props.setIsMenuOpen(false);
      props.setTrack(e.target.name);
    }
  };

  // Merging Testimonial Track Count with All Tracks

  for (let i = 0; i < props.tracks.length; i++) {
    props.tracks[i].track_count = Object.entries(props.trackCount)[i][1];
  }

  // Calculating All Tracks

  const allExerciseLength = props.tracks.map((track) => track.track_count).reduce((acc, val) => acc + val);

  return (
    <div className="track-dropdown">
      {/* Default Track */}
      <div className="track">
        <input type="radio" name="all" id="track-selector" onClick={handleTrackInput} />
        <span className="track-icon">
          <TrackIcon />
        </span>
        <span className="track-name">All</span>
        <span className="track-count">{allExerciseLength}</span>
      </div>

      {/* Generated Tracks */}
      {props.tracks.map((track) => {
        return (
          <Track
            key={track.slug}
            icon={track.icon_url}
            slug={track.slug}
            name={track.title}
            count={track.track_count}
            onClick={handleTrackInput}
          />
        );
      })}
    </div>
  );
}
