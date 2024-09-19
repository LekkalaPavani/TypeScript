

interface TravelBooking{
    destination: string;
    travelDate: Date;
    returnDate: Date;
    numberofTravelers: number;
}

const myTrip: TravelBooking={
    destination: "Paris",
    travelDate: new Date("2024-06-05"),
    returnDate: new Date("2024-06-30"),
    numberofTravelers: 2
};
function displayBooking(booking: TravelBooking):void{
    console.log(`Traveling to : ${booking.destination}`);
    console.log(`Travel Date: ${booking.travelDate.toDateString()}`);
    console.log(`return Date: ${booking.returnDate.toDateString()}`);
    console.log(`number of travelers:${booking.numberofTravelers}`);
}

displayBooking(myTrip);