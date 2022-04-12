import { Ride } from "./Ride";

describe("Ride Test", () => {
  it("shouldCalculateForAGivenTime", () => {
    const ride = new Ride(1,0);
    const totalFare = ride.Fare();
    expect(totalFare).toBe(1);
  });
  it("shouldCalculateForAGivenDistanceAndAGivenTime", () => {
    const ride = new Ride(1, 1);
    const totalFare = ride.Fare();
    expect(totalFare).toBe(11);
  });
});
