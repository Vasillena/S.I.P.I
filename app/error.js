"use client";

export default function Error() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 69px)",
        width: "100vw",
        marginTop: "50vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h1>Something went wrong! Please try again later!</h1>
    </div>
  );
}
