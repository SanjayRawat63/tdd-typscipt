import { StatementGenerator } from "./StatementGenerator";
import {Ride} from "./Ride"

describe("Statement Generator Test", () => {
  it("shouldCalculateForAGivenTimeAndAGivenDistance", () => {
    const statementGenerator = new StatementGenerator();
    const totalFare = statementGenerator.Fare(1, 1);
    expect(totalFare).toBe(11);
  });
  it("shouldCalculateForMultipleRide", () => {
    const rides=[new Ride(0,1),new Ride(1,0)]
    const statementGenerator=new StatementGenerator();
    const totalFare = statementGenerator.totalFare(rides);
    expect(totalFare).toBe(11);
  });
});
