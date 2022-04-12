export class Ride {
  private time: number;
  private distance: number;
  readonly FARE_PER_KM = 10;
  readonly FARE_PER_MINUTE = 1;
  constructor(time: number, distance: number) {
    this.time = time;
    this.distance = distance;
  }
  Fare = (): number => {
    return this.FARE_PER_MINUTE * this.time + this.FARE_PER_KM * this.distance;
  };
}
