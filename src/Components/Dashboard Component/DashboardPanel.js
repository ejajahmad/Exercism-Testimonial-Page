import { useEffect, useState, useRef } from "react";
import axios from "axios";

import Header from "../Header Components/Header";
import TestimonialContainer from "../Dashboard Component/Testimonial Components/TestimonialContainer";
import Footer from "../Footer Component/Footer";

export default function DashboardPanel() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [testimonials, setTestimonials] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const currPageRef = useRef();

  const [searchKey, setSearchKey] = useState(null);
  const [track, setTrack] = useState(null);
  const [order, setOrder] = useState("newest_first");
  const [trackSlugs, setTrackSlugs] = useState(null);
  const [trackCount, setTrackCount] = useState(null);

  useEffect(() => {
    // Storing Current Page Reference
    currPageRef.current = page;

    // Fetching Testimonials
    const fetchedTestimonials = async () => {
      try {
        const response = await axios.get(`https://exercism.org/api/v2/hiring/testimonials`, {
          params: {
            limit: 10,
            page: page,
            exercise: searchKey,
            track: track === "all" ? null : track,
            order: order,
          },
        });

        // Managing State

        setTestimonials(response.data.testimonials.results);
        setIsDataLoaded(true);
        setTotalPage(response.data.testimonials.pagination.total_pages);
        setTrackSlugs(response.data.testimonials.tracks);
        setTrackCount(response.data.testimonials.track_counts);

        console.log(testimonials);
      } catch (error) {
        console.error(`Something went wrong`, error);
      }
    };

    fetchedTestimonials();
  }, [page, searchKey, track, order]);

  return (
    <div data-testid="dashboard-panel" className="dashboard-panel container bg-white rounded-lg">
      {/* Header Component */}
      <Header
        setIsDataLoaded={setIsDataLoaded}
        setSearchKey={setSearchKey}
        setTrack={setTrack}
        setOrder={setOrder}
        setTrackSlugs={setTrackSlugs}
        trackSlugs={trackSlugs}
        setTrackCount={setTrackCount}
        trackCount={trackCount}
      />

      {/* Testimonial Container Component */}

      <TestimonialContainer isDataLoaded={isDataLoaded} testimonials={testimonials} />

      {/* Footer Component */}

      <Footer
        setIsDataLoaded={setIsDataLoaded}
        currentPage={currPageRef}
        totalPage={totalPage}
        setPage={setPage}
      />
    </div>
  );
}
