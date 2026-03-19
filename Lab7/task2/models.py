from datetime import datetime
import math

class Vehicle:

    def __init__(self, make, model, year, license_plate, daily_rate):
        self.make = make
        self.model = model
        self.year = year
        self.license_plate = license_plate
        self.daily_rate = daily_rate
        self.is_available = True
        self._rental_history = []

    def calcaulate_rental_cost(self, days):
        if days <= 0:
            return 0
        return self.daily_rate * days
    
    def rent_vehicle(self, customer_name, days):
        if not self.is_available:
            return False, f"Vehicle {self.license_plate} is not available"
        cost = self.calcaulate_rental_cost(days)
        rental = {
            'customer': customer_name,
            'days': days,
            'cost': cost,
            'rental_date': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }

        self._rental_history.append(rental)
        self.is_available = False
        return True, f"Vehicle rented successfully. Total cost: ${cost:.2f}"
    
    def return_vehicle(self):
        self.is_available = True
        return f"Vehicle {self.license_plate} returned and now available"
    
    def get_rental_history(self):
        if not self._rental_history:
            return "No rental history available"
        
        history = f"Rental History for {self.make} {self.model}:\n"
        for i, rental in enumerate(self._rental_history, 1):
            history += f"{i}. Customer: {rental['customer']}, Days: {rental['days']}, "
            history += f"Cost: ${rental['cost']:.2f}, Date: {rental['rental_date']}\n"
            return history
        
    def __str__(self):
        availability = "Available" if self.is_available else "Not Available"
        return f"{self.year} {self.make} {self.model} ({self.license_plate}) - {availability} - ${self.daily_rate:.2f}/day"
    
class Car(Vehicle):
    
    def __init__(self, make, model, year, license_plate, daily_rate, num_doors, transmission, fuel_type):
        super().__init__(make, model, year, license_plate, daily_rate)
        self.num_doors = num_doors
        self.transmission = transmission
        self.fuel_type = fuel_type
        self.has_ac = True
        self.passenger_capacity = 5

    def calcaulate_rental_cost(self, days):
        base_cost = super().calcaulate_rental_cost(days)

        luxury_brands = ['Mercedes', 'BMW', 'Audi', 'Lexus']
        if self.make in luxury_brands:
            base_cost *= 1.2

        return base_cost
    
    def get_car_details(self):
        return f"Car Details: {self.num_doors}-door, {self.transmission}transmission, {self.fuel_type}"
    
    def __str__(self):
        base_str = super().__str__()
        return f"Car: {base_str} | {self.get_car_details()}"
    