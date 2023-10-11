import { useComponentValue } from "@latticexyz/react";
import { singletonEntity } from "@latticexyz/store-sync/recs";
import LoadingScreen from "@/components/loadingScreen/loadingScreen";

import RootLayout from "./components/layout/layout";
import GameRoot from "./game/gameRoot";
import { useMUD } from "./useMUD";

export const App = () => {
  const {
    components: { Counter },
    systemCalls: {
      mudGetAllFacilityEntityMetadatas,
      mudBuildFacility,
      mudGetEntityMetadataAtPosition,
    },
  } = useMUD();

  const counter = useComponentValue(Counter, singletonEntity);

  return (
    <RootLayout>
      <GameRoot />
      <div>
        Counter: <span>{counter?.value ?? "??"}</span>
      </div>
      <button
        type="button"
        className="px-100 py-100 rounded-md border border-gray-300 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        onClick={async (event) => {
          event.preventDefault();
          console.log("mudBuildFacility:", await mudBuildFacility());
        }}
      >
        mudBuildFacility
      </button>
      <button
        type="button"
        className="px-100 py-100 rounded-md border border-gray-300 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        onClick={async (event) => {
          event.preventDefault();
          console.log(
            "mudGetAllFacilityEntityMetadatas:",
            await mudGetAllFacilityEntityMetadatas()
          );
        }}
      >
        mudGetAllFacilityEntityMetadatas
      </button>
      <button
        type="button"
        className="px-100 py-100 rounded-md border border-gray-300 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        onClick={async (event) => {
          event.preventDefault();
          console.log(
            "mudGetEntityMetadataAtPosition:",
            await mudGetEntityMetadataAtPosition()
          );
        }}
      >
        mudGetEntityMetadataAtPosition
      </button>
      <LoadingScreen />
    </RootLayout>
  );
};
