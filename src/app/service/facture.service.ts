import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { facture } from '../models/facture.form';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private apiURL = 'api/factures'
  constructor(private http: HttpClient) { } //HttpClient pour communiquer avec le API/Backend
 //CRUD
  //read
  //fetch list (recupere la list to do)
getFactures(){
  return this.http.get<facture[]>(this.apiURL);
}
//read
  //fetch item (recupere un seule item todo)
getFacture(id: number){
return this.http.get<facture>(this.apiURL+'/'+id);
}
  // create
addFacture(item : facture){
  return this.http.post<any>(this.apiURL, item);

}
 //update
updateFacture(item: facture){
return this.http.put<facture>(this.apiURL+'/'+item.id,item);
}
  //supprimer
deleteFacture(id: number){
  return this.http.delete<facture>(this.apiURL+'/'+id);
}

}
