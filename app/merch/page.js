import Merch from "../components/Merch/Merch";

export const metadata = {
  title: "Merch",
  description: "For our true fans. Browse our merch.",
};

export default function MerchPage() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 69px)",
      }}
    >
      <Merch />
    </div>
  );
}
