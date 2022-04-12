import { Ride } from "./Ride";
export class StatementGenerator {
  totalFare = (rides: Array<Ride>): number => {
    let totalfare: number = 0;
    for (let i = 0; i < rides.length; i++) {
      totalfare += rides[i].Fare();
    }
    return totalfare;
  };
}
