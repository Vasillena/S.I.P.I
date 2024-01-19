import Contact from "../components/Contact/Contact";
import GoogleMaps from "../components/GoogleMaps/GoogleMaps";

export const metadata = {
  title: "Reserve",
  description: "Join the party. Make a reservation now. Contacts below.",
};

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
