import Event from "./event/Event";
interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}
interface Props {
  items: Event[];
}

const EventList = (props: Props) => {
  return (
    <ul>
      {props.items.map((event) => (
        <Event
          title={event.title}
          image={`/${event.image}`}
          date={event.date}
          location={event.location}
          id={event.id}
          key={event.id}
        />
      ))}
    </ul>
  );
};
export default EventList;
