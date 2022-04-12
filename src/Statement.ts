export class Statement{
    totalFare:number=0;
    noOfRide:number=0;
    avgFarePerRide:number=0;
    constructor(totalFare:number,noOfRide:number,avgFarePerRide:number)
    {
        this.totalFare=totalFare;
        this.noOfRide=noOfRide;
        this.avgFarePerRide=avgFarePerRide;
    }
}