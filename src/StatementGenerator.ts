export class StatementGenerator {
    readonly FARE_PER_KM=10;
    readonly FARE_PER_MINUTE=1;
  totalFare = (time: number, distance: number): number => {
    return this.FARE_PER_MINUTE * time + this.FARE_PER_KM * distance;
  };
}
