export interface Pokemon {
  id: number;
  name: string;
  isMainSeries: boolean;
  generation: Generation;
  names: PokemonName[];
  effectEntries: PokemonEffectEntry[];
  effectChanges: EffectChange[];
  flavorTextEntries: FlavorTextEntry[];
  pokemon: PokemonElement[];
}

export interface EffectChange {
  versionGroup: Generation;
  effectEntries: EffectChangeEffectEntry[];
}

export interface EffectChangeEffectEntry {
  effect: string;
  language: Generation;
}

export interface Generation {
  name: string;
  url: string;
}

export interface PokemonEffectEntry {
  effect: string;
  shortEffect: string;
  language: Generation;
}

export interface FlavorTextEntry {
  flavorText: string;
  language: Generation;
  versionGroup: Generation;
}

export interface PokemonName {
  name: string;
  language: Generation;
}

export interface PokemonElement {
  isHidden: boolean;
  slot: number;
  pokemon: Generation;
}

export interface PokemonsList {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
