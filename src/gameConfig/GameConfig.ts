export interface GameConfig {
  fight: {
    fighterLife: number;
  };
  character: {
    fighter: {
      attack: {
        pied: number;
        poing: number;
      };
    };
    ninja: {
      attack: {
        coupDeKatana: number;
      };
    };
    capitaine: {
      attack: {
        pied: number;
      };
    };
  };
}
