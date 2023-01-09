import { Arena } from "./game-play/Arena";

const arena = new Arena();
arena.initFighters();
arena.getRandomFightsPair();
arena.startCompetition();
