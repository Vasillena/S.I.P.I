import Party from "../components/Party/Party";

export const metadata = {
  title: "Meake a party",
  description:
    "Make your own party. Browse our options for creating the perfect party for you.",
};

export default function MakeAPartyPage() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 69px)",
      }}
    >
      <Party />
    </div>
  );
}
