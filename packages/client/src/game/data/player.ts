import { IFacility } from "../types/entities";
import EntityData, { FacilityDataType } from "./entities";
import { ResourceType } from "./resources";

export type PlayerData = {
  resources: { [key in ResourceType]: number };
  facilities: IFacility[];
  name: string;
};

export const createNewPlayerData = (name = "New Player"): PlayerData => {
  return {
    resources: {
      power: 0,
      gravity: 0,
      water: 0,
      food: 0,
      LAPU: 1000,
      crystal: 0,
      population: 0,
    },
    facilities: [],
    name,
  };
};

export type TutorialStep = {
  name: string;
  text: string;
  inventory: FacilityDataType[];
};

export const tutorialSteps = [
  {
    name: "intro",
    text: "Let's start by building a Gravity Hill",
    inventory: [EntityData.facilities.gravityhill],
  },
  {
    name: "power-up",
    text: "Power it all up",
    inventory: [
      EntityData.facilities.gravityhill,
      EntityData.facilities.dynamo,
    ],
  },
  {
    name: "living",
    text: "Make it a life worth living",
    inventory: [
      EntityData.facilities.gravityhill,
      EntityData.facilities.dynamo,
      EntityData.facilities.residence,
      EntityData.facilities.scaffold,
    ],
  },
] as TutorialStep[];
