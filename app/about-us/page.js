import AboutUs from "../components/AboutUs/AboutUs";

export const metadata = {
  title: "About us",
  description:
    "Find out more about us: who are we, what are our values and goals.",
};

export default function AboutUsPage() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 69px)",
      }}
    >
      <AboutUs />
    </div>
  );
}
