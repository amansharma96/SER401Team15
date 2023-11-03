const mockReportsData = [
  {
    type: "MYN Report",
    reports: [
      {
        title: "Fire Incident",
        address: "123 Apple Street Orland Park, IL 60462",
        status: true,
      },
      {
        title: "Earthquake",
        address: "456 Orange Street Orland Park, IL 60462",
        status: true,
      },
      {
        title: "Earthquake",
        address: "789 Banana Street Orland Park, IL 60462",
        status: false,
      },
      {
        title: "Fire Incident",
        address: "123 Blueberry Street Orland Park, IL 60462",
        status: false,
      },
    ],
  },
  {
    type: "Hazard Report",
    reports: [
      {
        title: "Fire Incident",
        address: "123 Blueberry Street Orland Park, IL 60462",
        status: false,
      },
      {
        title: "Earthquake",
        address: "456 Strawberry Street Orland Park, IL 60462",
        status: false,
      },
      {
        title: "Earthquake",
        address: "789 Raspberry Street Orland Park, IL 60462",
        status: false,
      },
    ],
  },
];

export default mockReportsData;
