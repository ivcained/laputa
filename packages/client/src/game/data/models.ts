export type ModelDataType = {
  name: string;
  nodes: string[];
  materials: string[];
  colors: string[];
};

const ModelData: { [key: string]: ModelDataType } = {
  block00: {
    name: "GenericBlock00",
    nodes: ["BlockBase", "Block02"],
    materials: ["Block.Material.001", "Block.Material.001"],
    colors: ["primary", "primary"],
  },
  block01: {
    name: "GenericBlock01",
    nodes: ["BlockBase", "Block02"],
    materials: ["Block.Material.001", "Block.Material.001"],
    colors: ["primary", "secondary"],
  },
  block02: {
    name: "GenericBlock02",
    nodes: ["BlockBase", "Block01"],
    materials: ["Block.Material.001", "Block.Material.001"],
    colors: ["primary", "primary"],
  },
  engine00: {
    name: "Engine00",
    nodes: ["Engine00", "Engine00001"],
    materials: ["Engine.Mat.Back", "Engine.Mat.Front"],
    colors: ["secondary", "primary"],
  },
  doubleside00: {
    name: "DoubleSide00",
    nodes: ["Double00", "Double00001"],
    materials: ["Engine.Mat.Back", "Engine.Mat.Front"],
    colors: ["secondary", "primary"],
  },
} as const;

export type TModelData = typeof ModelData;

export default ModelData;
