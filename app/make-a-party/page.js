import Party from "../components/Party/Party";

export default function MakeAParty() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 69px)",
      }}
    >
      <Party />;
    </div>
  );
}
