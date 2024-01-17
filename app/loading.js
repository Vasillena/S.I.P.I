import Image from "next/image";
import loading from "@/public/loading.gif";

export default function LoadingPage() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 97px)",
        width: "100vw",
        marginTop: "50vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image src={loading} alt="Loading" />
    </div>
  );
}
