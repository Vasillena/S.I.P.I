import Menu from "../components/Menu/Menu";

export const metadata = {
  title: "Menu",
  description: "Browse our menu.",
};

export default function MenuPage() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 69px)",
      }}
    >
      <Menu />
      {/* <MenuItems /> */}
    </div>
  );
}
