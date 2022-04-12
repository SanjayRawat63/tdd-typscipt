import { Ride } from "./Ride";
export class StatementGenerator {
  readonly FARE_PER_KM = 10;
  readonly FARE_PER_MINUTE = 1;
  Fare = (time: number, distance: number): number => {
    return this.FARE_PER_MINUTE * time + this.FARE_PER_KM * distance;
  };

  totalFare = (rides: Array<Ride>): number => {
      let totalfare:number=0;
      for(let i=0;i<rides.length;i++)
      {
          totalfare+=this.Fare(rides[i].time,rides[i].distance)
      }
      return totalfare;
  };
}
