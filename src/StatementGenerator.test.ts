import { StatementGenerator} from "./StatementGenerator";
describe("Statement Generator Test",()=>{
     it("shouldCalculateForAGivenTime",()=>{
          const statementGenerator=new StatementGenerator();
          const totalFare=statementGenerator.totalFare(1);
          expect(totalFare).toBe(1)
     })
})