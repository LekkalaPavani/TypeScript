var myTrip = {
    destination: "Paris",
    travelDate: new Date("2024-06-05"),
    returnDate: new Date("2024-06-30"),
    numberofTravelers: 2
};
function displayBooking(booking) {
    console.log("Traveling to : ".concat(booking.destination));
    console.log("Travel Date: ".concat(booking.travelDate.toDateString()));
    console.log("return Date: ".concat(booking.returnDate.toDateString()));
    console.log("number of travelers:".concat(booking.numberofTravelers));
}
displayBooking(myTrip);
