import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CitiesModel} from '../../../../shared/models/cities.model';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-cities-list',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './cities-list.html',
  styleUrl: './cities-list.scss',
})
export class CitiesList {
  @Input() citiesFromParent: CitiesModel[] = [];
  @Output() cityCreated = new EventEmitter<CitiesModel>();

  protected CityForm = new FormGroup({
    name: new FormControl<string>('name 0', [Validators.required, Validators.minLength(3)]),
    inhabitants: new FormControl<number>(100, [Validators.required, Validators.minLength(1)]),
    typicalDish: new FormControl<string>('typicalDish 0', [Validators.required, Validators.minLength(3)]),
    currency: new FormControl<string>('currency 0', [Validators.required, Validators.minLength(2)]),
    flag: new FormControl<string>('flag 0', [Validators.required, Validators.minLength(1)]),
  })

  protected addCity() {
    if (this.CityForm.invalid) {
      this.CityForm.markAllAsTouched();
      return;
    }
    const values = this.CityForm.value;
    const newCity: CitiesModel = {
      id: Date.now(),
      name: values.name ?? '',
      inhabitants: values.inhabitants ?? 0,
      typicalDish: values.typicalDish ?? '',
      currency: values.currency ?? '',
      flag: values.flag ?? '',
    };
    this.cityCreated.emit(newCity);
    this.CityForm.reset();
  }
}

