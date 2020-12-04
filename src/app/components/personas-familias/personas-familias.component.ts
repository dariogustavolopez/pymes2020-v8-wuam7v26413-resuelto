import { Component, OnInit } from "@angular/core";
import { PersonaFamilia } from "../../models/persona-familia";
import { MockPersonasFamiliasService } from "../../services/mock-personas-familias.service";
import { PersonasFamiliasService } from "../../services/personas-familias.service";
 
@Component({
  selector: "app-personas-familias",
  templateUrl: "./personas-familias.component.html",
  styleUrls: ["./personas-familias.component.css"]
})
export class PersonasFamiliasComponent implements OnInit {
  Titulo = "Personas Familias";
  Items: PersonaFamilia[] = [];
 
  constructor(
    //private personasFamiliasService: PersonasFamiliasService
    private personasFamiliasService:  MockPersonasFamiliasService
  ){}
 
  ngOnInit() {
    this.GetFamiliasPersonas();
  }
 
  GetFamiliasPersonas() {
    this.personasFamiliasService.get()
    .subscribe((res:PersonaFamilia[]) => {
      this.Items = res;
    });
  }
}
