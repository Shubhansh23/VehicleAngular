import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle.model';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle = {
    make: '',
    model: '',
    year: 0,
    vin: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vehicleService.getVehicle(+id).subscribe(data => {
        this.vehicle = data;
      });
    }
  }

  saveVehicle(): void {
    if (this.vehicle.id) {
      this.vehicleService.updateVehicle(this.vehicle.id, this.vehicle).subscribe(() => {
        this.router.navigate(['/vehicle-list']);
      });
    } else {
      this.vehicleService.createVehicle(this.vehicle).subscribe(() => {
        this.router.navigate(['/vehicle-list']);
      });
    }
  }

  

}
