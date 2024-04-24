export interface NamedAPIResourceList {
  count: number;
  next: string;
  previous: null;
  results: NamedAPIResource[];
}

export interface NamedAPIResource {
  name: string;
  url: string;
}
