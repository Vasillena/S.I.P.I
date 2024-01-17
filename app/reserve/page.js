import Contact from "../components/Contact/Contact";
import GoogleMaps from "../components/GoogleMaps/GoogleMaps";

export default function ReservePage() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 69px)",
      }}
    >
      <Contact />
      <GoogleMaps />
    </div>
  );
}
