import { useState, useEffect } from "react";
import axios from "axios";

import TrackDropDown from "./TrackDropDown";
import { ReactComponent as TrackSelectorIcon } from "../../../assets/svg/TrackSelectorIcon.svg";
import { ReactComponent as DropdownIcon } from "../../../assets/svg/DropdownIcon.svg";

export default function TrackSelector(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [trackTestimonial, setTrackTestimonial] = useState([]);

  const handleTrackDropDown = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchedTracks = async () => {
      try {
        const response = await axios.get(`https://exercism.org/api/v2/tracks`);
        setTracks(response.data.tracks);

        setTrackTestimonial(tracks.filter((track) => props.trackSlugs.includes(track.slug)));
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };

    fetchedTracks();
  }, [isMenuOpen]);

  return (
    <div className="track-selector">
      <TrackSelectorIcon className="track-btn" onClick={handleTrackDropDown} />

      <DropdownIcon className="track-dropdown-icon" onClick={handleTrackDropDown} />

      {isMenuOpen && trackTestimonial.length !== 0 ? (
        <TrackDropDown
          setIsDataLoaded={props.setIsDataLoaded}
          setTrack={props.setTrack}
          setIsMenuOpen={setIsMenuOpen}
          tracks={trackTestimonial}
          trackCount={props.trackCount}
        />
      ) : null}
    </div>
  );
}
