// "use client";

// import classes from "./MenuItems.module.css";

// export default function MenuItems({ selectedTab, setSelectedTab }) {
//   return (
//     <div className={classes.titles}>
//       <div
//         className={`${classes.title} ${
//           selectedTab === "MyCampaigns" ? "active" : ""
//         }`}
//         onClick={() => setSelectedTab("MyCampaigns")}
//       >
//         <h2
//           className={selectedTab === "MyCampaigns" ? classes["bold-text"] : ""}
//         >
//           My Campaigns
//         </h2>
//       </div>
//       <div className={classes.title}>
//         <h2>|</h2>
//       </div>
//       <div
//         className={`${classes.title} ${
//           selectedTab === "SavedCampaigns" ? "active" : ""
//         }`}
//         onClick={() => setSelectedTab("SavedCampaigns")}
//       >
//         <h2
//           className={
//             selectedTab === "SavedCampaigns" ? classes["bold-text"] : ""
//           }
//         >
//           Saved Campaigns
//         </h2>
//       </div>
//     </div>
//   );
// }
