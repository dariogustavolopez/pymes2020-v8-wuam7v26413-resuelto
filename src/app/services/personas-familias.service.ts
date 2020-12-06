import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";
import {Persona } from "../models/persona";

@Injectable({
  providedIn: "root"
})
export class PersonasFamiliasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    // la barra al final del resourse url es importante para los metodos que concatenan el id del recurso (GetById, Put)
   
    // this.resourceUrl = "https://pav2.azurewebsites.net/api/personasfamilias";
    //this.resourceUrl = "https://pav2.azurewebsites.net/api/personas";

  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }
}
