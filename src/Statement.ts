import { Ride } from "./Ride";

export class Statement {
   private rides:Ride[];
   constructor(rides:Array<Ride>){
       this.rides=rides;
   }
   totalFare=()=> this.rides.reduce(function(total:number,ride:Ride){return total+ride.Fare()},0);
         
    getNoOfRides=()=>this.rides.length;
    getAvfFarePerRide=()=>this.totalFare()/this.getNoOfRides();    
}