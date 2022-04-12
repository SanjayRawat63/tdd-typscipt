import { Statement } from "./Statement";
import { Ride } from "./Ride";


describe("Statement Test", () => {
   const rides = [new Ride(0, 1), new Ride(1, 0)];
   const statement = new Statement(rides);
  it("totalfare for the rides", () => {
      expect(statement.totalFare()).toBe(11);
  });
  it("No of rides", () => {
    expect(statement.getNoOfRides()).toBe(2);
  });
  it("return totalfare for the rides", () => {
    expect(statement.getAvfFarePerRide()).toBe(5.5);
  });
});
