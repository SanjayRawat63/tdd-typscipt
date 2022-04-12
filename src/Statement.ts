import { Ride } from "./Ride";

export class Statement {
   private rides:Ride[];
   constructor(rides:Array<Ride>){
       this.rides=rides;
   }
   totalFare=()=> {
       let totalfare:number=0;
       for(let i=0;i<this.rides.length;i++)
          totalfare+=this.rides[i].Fare();
   return totalfare;
        }; 
    getNoOfRides=()=>this.rides.length;
    getAvfFarePerRide=()=>this.totalFare()/this.getNoOfRides();    
}