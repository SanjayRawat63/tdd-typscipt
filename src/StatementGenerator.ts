import { Ride } from "./Ride";
import { Statement } from "./Statement";
export class StatementGenerator {

  totalFare = (rides: Array<Ride>): Statement => {
    let totalfare : number = 0;
    for (let i = 0; i < rides.length; i++) {
      totalfare += rides[i].Fare();
    }
    const noOfRide=rides.length;
    const avgFarePerRide=totalfare/noOfRide;
    return new  Statement(totalfare,noOfRide,avgFarePerRide);
  };
}
