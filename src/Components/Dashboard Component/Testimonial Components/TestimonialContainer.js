import { useState } from "react";

import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import moment from "moment";

import Testimonial from "./Testimonial";

export default function TestimonialContainer(props) {
  // CSS for Loading Spinner
  const override = css`
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    border-color: red;
  `;

  return (
    <div className="testimonial-container">
      {props.isDataLoaded ? (
        props.testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            trackIcon={testimonial.track.icon_url}
            profilePic={testimonial.mentor.avatar_url}
            name={testimonial.mentor.handle}
            topic={testimonial.exercise.title}
            track={testimonial.track.title}
            content={testimonial.content.slice(0, 80)}
            date={moment(testimonial.created_at).startOf("hour").fromNow()}
          />
        ))
      ) : (
        <FadeLoader color="#5C5589" loading={!props.isDataLoaded} css={override} size={150} />
      )}
    </div>
  );
}
