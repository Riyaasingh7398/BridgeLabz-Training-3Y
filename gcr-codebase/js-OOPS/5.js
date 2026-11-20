class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance < 0) {
            throw new Error("Please provide a valid trip distance.");
        }

        return this.distance * 10;
    }
}

const driver = new Driver("Aman", 4.8, "Car", "UP32AB1234");
console.log("Driver:", driver.name);
console.log("Vehicle:", driver.vehicle);

try {
    const trip = new Trip("Mathura", "Agra", 60);
    console.log("Fare:", trip.calculateFare());

    const invalidTrip = new Trip("Mathura", "Delhi", -20);
    console.log("Fare:", invalidTrip.calculateFare());
} catch (error) {
    console.log("Trip Error:", error.message);
}
