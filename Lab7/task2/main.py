from models import Vehicle, Car
import time

def main():
    generic_vehicle = Vehicle("Generic", "Vehicle", 2020, "GEN001", 50.00)
    car1 = Car("Toyota", "Camry", 2022, "CAR001", 65.00, 4, "Automatic", "Petrol")
    car2 = Car("BMW", "X5", 2023, "CAR002", 120.00, 5, "Automatic", "Diesel")

    vehicles = [generic_vehicle, car1, car2]

    for vehicle in vehicles:
        print(vehicle)

    for i, vehicle in enumerate(vehicles, 1):
        print(f"{i}. {vehicle}")

    rental_days = 5

    for vehicle in vehicles:
        cost = vehicle.calculate_rental_cost(rental_days)
        print(f"{vehicle.__class__.__name__}: {vehicle.make} {vehicle.model}")
        print(f" Rental cost for {rental_days}: ${cost:.2f}")
        if hasattr(vehicle, 'get_car_details'):
            print(f"{vehicle.get_car_details()}")

    success, message = car1.rent_vehicle("John Doe", 3)
    print(f"Renting {car1.make} {car1.model}: {message}")

    success, message = car1.rent_vehicle("Jane Smith", 2)
    print(f"Attempt to rent same car again: {message}")