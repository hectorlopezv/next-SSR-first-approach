import Link from "next/link";
import Image from "next/image";
interface Props {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
}

export const Event = (props: Props) => {
  const { title, image, date, location, id } = props;
  const dateFormat = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/events/${id}`;
  return (
    <li>
      <img src={image} alt={`event ${id}`} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{dateFormat.replace(",", "\n")}</time>
        </div>
        <div>
          <address>{location}</address>
        </div>
        <div>
          <Link href={"/"}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};
export default Event;
