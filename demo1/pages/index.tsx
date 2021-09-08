import type { NextPage } from "next";
import EventList from "../components/eventList/eventList";
import { getFeaturedEvents } from "../dummy-data";
const Home: NextPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default Home;
