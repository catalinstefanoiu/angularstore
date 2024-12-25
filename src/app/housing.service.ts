import { Injectable } from '@angular/core';
import { HousingLocation  } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = "http://localhost:3000/locations";

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    try {
      const response = await fetch(this.url);
      if (response.ok) {
        return await response.json();
      }
      console.error('Failed to fetch housing locations:', response.status);
      return [];
    } catch (error) {
      console.error('Error fetching housing locations:', error);
      return [];
    }
  }
  

  async getHousingLocationsById(id: Number): Promise<HousingLocation | undefined> {
    try {
      const response = await fetch(`${this.url}/${id}`);
      if (response.ok) {
        return await response.json();
      }
      console.error('Failed to fetch housing location:', response.status);
      return undefined;
    } catch (error) {
      console.error('Error fetching housing location:', error);
      return undefined;
    }
  }
  
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
