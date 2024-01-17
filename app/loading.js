import Image from "next/image";
import loading from "@/public/loading.gif";

export default function LoadingPage() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 97px)",
        margin: "14em auto 0 auto",
      }}
    >
      <Image src={loading} alt="Loading" />;
    </div>
  );
}
