export class StatementGenerator {
  totalFare = (time: number, distance: number): number => {
    return 1 * time + 10 * distance;
  };
}
