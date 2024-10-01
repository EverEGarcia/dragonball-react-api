export interface Character {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    originPlanet: {
      id: number;
      name: string;
      isDestroyed: boolean;
      description: string;
      image: string;
    };
    transformations: Array<any>; // Puedes definir un tipo más específico si deseas.
  }
  