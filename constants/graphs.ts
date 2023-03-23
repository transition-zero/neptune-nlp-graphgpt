export const PLANT_GRAPH = {
  nodes: [
    {
      id: "plant",
      label: "Zhongdian Fenyi Power Plant",
      color: "#ffffff",
    },
    {
      id: "chinese_name",
      label: "ä¸­çµæåå®çµå",
      color: "#ffffff",
    },
    {
      id: "country",
      label: "China",
      color: "#ff7675",
    },
    {
      id: "number_of_units",
      label: "2",
      color: "#ffffff",
    },
    {
      id: "owner",
      label: "China Energy Investment Corporation",
      color: "#ffffff",
    },
    {
      id: "capacity_mw",
      label: "1,320",
      color: "#ffffff",
    },
    {
      id: "status",
      label: "operating",
      color: "#00b894",
    },
    {
      id: "combustion_technology",
      label: "ultra-supercritical",
      color: "#ffffff",
    },
    {
      id: "location",
      label: "Fenyi County, Xinyu, Jiangxi Province",
      color: "#ffffff",
    },
    {
      id: "region",
      label: "Asia",
      color: "#fdcb6e",
    },
  ],
  edges: [
    {
      from: "plant",
      to: "chinese_name",
      label: "has Chinese name",
    },
    {
      from: "plant",
      to: "country",
      label: "located in",
    },
    {
      from: "plant",
      to: "number_of_units",
      label: "has number of units",
    },
    {
      from: "plant",
      to: "owner",
      label: "owned by",
    },
    {
      from: "plant",
      to: "capacity_mw",
      label: "has capacity of",
    },
    {
      from: "plant",
      to: "status",
      label: "has status of",
    },
    {
      from: "plant",
      to: "combustion_technology",
      label: "uses combustion technology of",
    },
    {
      from: "plant",
      to: "location",
      label: "has location of",
    },
    {
      from: "plant",
      to: "region",
      label: "located in region of",
    },
  ],
};
