import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFactureService {
 tableau = [
 {designation:'Alfreds Futterkiste', prix: 1500, quantity: 1},
 {designation:'Centro comercial Moctezuma', prix:2000, quantity: 1 },
 {designation:'Ernst Handel', prix:3000, quantity: 1},
 {designation:'Island Trading', prix:1500, quantity: 2},
 {designation:'Laughing Bacchus Winecellars', prix:1500, quantity: 2}
 ]
  constructor() { }
createDb(){
  return {
    factures : this.tableau
  };
}

}
