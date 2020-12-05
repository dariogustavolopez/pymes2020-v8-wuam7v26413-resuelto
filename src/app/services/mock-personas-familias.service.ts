import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { PersonasFamilias } from "../models/persona-familia";

@Injectable({
  providedIn: 'root'
})
export class MockPersonasFamiliasService {
  constructor() {}
  get() {
    return of(PersonasFamilias);
  }
}