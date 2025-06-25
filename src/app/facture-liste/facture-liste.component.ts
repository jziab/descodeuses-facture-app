import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { FactureService } from '../service/facture.service';

@Component({
  selector: 'app-facture-liste',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
  ],
  templateUrl: './facture-liste.component.html',
  styleUrl: './facture-liste.component.css'
})
export class FactureListeComponent implements OnInit {
  
signup!: FormGroup ;

constructor(private formbuilder: FormBuilder, private factureService : FactureService ){}

 tableau = [
 {designation:'Alfreds Futterkiste', prix: 1500, quantity: 1},
 {designation:'Centro comercial Moctezuma', prix:2000, quantity: 1 },
 {designation:'Ernst Handel', prix:3000, quantity: 1},
 {designation:'Island Trading', prix:1500, quantity: 2},
 {designation:'Laughing Bacchus Winecellars', prix:1500, quantity: 2}
 ]
 somme = 0; 

 ngOnInit(): void {
  this.signup = this.formbuilder.group({
      designation:['',[Validators.required]],
      prix:['',[Validators.required]],
      quantity:['',[Validators.required]]
  })
 this.calcul();
 }
 onsubmit(){
  if (this.signup.valid) {
    this.tableau.push(this.signup.value)
    this.somme = 0
      this.calcul();
    console.log(this.signup.value);
  }

 }
 calcul(){
 let prixFinal = 0 ; 
    for (let i = 0; i < this.tableau.length; i++) {
     prixFinal = this.tableau[i].quantity * this.tableau[i].prix 
   this.somme +=  prixFinal;
    }
   console.log("la somme est : "+ this.somme);
 }
 
}
