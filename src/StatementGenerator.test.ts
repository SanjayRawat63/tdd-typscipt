import { StatementGenerator } from "./StatementGenerator";
import { Ride } from "./Ride";
import { Statement } from "./Statement";

describe("Statement Generator Test", () => {
  it("shouldCalculateForMultipleRide", () => {
    const rides = [new Ride(0, 1), new Ride(1, 0)];
    const statementGenerator = new StatementGenerator();
    const expected=new Statement(11,2,5.5);
    const actual= statementGenerator.totalFare(rides);
    expect(actual).toStrictEqual(expected);
  });
});
