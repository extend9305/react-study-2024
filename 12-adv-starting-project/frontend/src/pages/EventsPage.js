import { Link } from "react-router-dom";

const DUMMY_EVNETS = [
  { id: "e1", title: "Some event" },
  { id: "e2", title: "Another evnet" },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVNETS.map((event) => (
          <li key={event.id}>
            <Link to={`${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
