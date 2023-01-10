import { NotableMomentType } from "./types";

export const notableMomentTypes: ReadonlyArray<NotableMomentType> = (
  [
    [0, "NEW PR!", "NEW_PR", 1],
    [1, "HIT DAILY TARGET!", "MET_DAILY_TARGET", 8],
    [2, "ACHIEVEMENT UNLOCKED!", "ACHIEVEMENT_UNLOCKED", 5],
    [3, "MISSION COMPLETED", "MISSION_COMPLETED", 6],
    [4, "UNLOCKED ITEM", "UNLOCKED_ITEM", 4],
    [5, "LEVEL UP!", "GAINED_LEVEL", 2],
    [8, "TOOK A JERSEY", "TOOK_ARCH_JERSEY", 9],
    [10, "COMPLETED A GOAL", "COMPLETED_GOAL", 7],
    [13, "FINISHED EVENT", "FINISHED_EVENT", 11],
    [15, "FINISHED WORKOUT", "FINISHED_WORKOUT", 12],
    [17, "FINISHED CHALLENGE", "FINISHED_CHALLENGE", 10],
    [19, "TRAINING PLAN COMPLETE!", "TRAINING_PLAN_COMPLETE", 3],
    [20, "ACTIVITY BESTS", "ACTIVITY_BESTS", 13],
  ] as const
).map(([id, name, imageName, priority]) => ({ id, name, imageName, priority }));
