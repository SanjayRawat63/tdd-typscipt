import { StatementGenerator } from "./StatementGenerator";
describe("Statement Generator Test", () => {
  it("shouldCalculateForAGivenTime", () => {
    const statementGenerator = new StatementGenerator();
    const totalFare = statementGenerator.totalFare(1, 0);
    expect(totalFare).toBe(1);
  });
  it("shouldCalculateForAGivenDistance", () => {
    const statementGenerator = new StatementGenerator();
    const totalFare = statementGenerator.totalFare(0, 1);
    expect(totalFare).toBe(10);
  });
  it("shouldCalculateForAGivenTimeAndAGivenDistance", () => {
    const statementGenerator = new StatementGenerator();
    const totalFare = statementGenerator.totalFare(1, 1);
    expect(totalFare).toBe(11);
  });
});
