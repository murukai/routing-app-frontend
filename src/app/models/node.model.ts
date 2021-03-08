export interface NodeI {
  routeId?: number;
  name?: string;
  planetOrig?: string;
  planetNode?: string;
  speedDelay?: number;
  distance?: number;
}

export class Node {
  constructor(
    public routeId?: number,
    public name?: string,
    public planetOrig?: string,
    public planetNode?: string,
    public speedDelay?: number,
    public distance?: number
  ) { }
}
