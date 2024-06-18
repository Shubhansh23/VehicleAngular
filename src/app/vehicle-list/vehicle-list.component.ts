import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];
  searchText: string = '';

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }

  deleteVehicle(id: number | undefined): void {
    if (id === undefined) {
      console.error('Cannot delete vehicle without id.');
      return;
    }
    this.vehicleService.deleteVehicle(id).subscribe(() => {
      this.loadVehicles();
    });
  }

  // Custom filtering logic
  filterVehicles(): Vehicle[] {
    if (!this.searchText.trim()) {
      return this.vehicles;
    }
    return this.vehicles.filter(vehicle =>
      vehicle.make.toLowerCase().includes(this.searchText.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
