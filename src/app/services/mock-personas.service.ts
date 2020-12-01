import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Persona, Personas } from "../models/persona";
 
@Injectable({
  providedIn: "root"
})
export class MockPersonasService {
  constructor() {}
  get(Nombre: string, Activo: boolean, pagina: number): any {
    var Lista = Personas.filter(
      item =>
        // Nombre == null  chequea por null y undefined
        // Nombre === null  chequea solo por null
        (Nombre == null ||
          Nombre == "" ||
          item.Nombre.toUpperCase().includes(Nombre.toUpperCase())) &&
        (Activo == null || item.Activo == Activo)
    );
    //ordenar
    Lista = Lista.sort( (a,b) => a.Nombre.toUpperCase() > b.Nombre.toUpperCase() ? 1 : -1 );
    // paginar con slice
    var RegistrosTotal = Lista.length;
    var RegistroDesde = (pagina - 1) * 10;
    Lista = Lista.slice(RegistroDesde, RegistroDesde + 10);
    return of({ Lista: Lista, RegistrosTotal: RegistrosTotal });
  }
  // no usamos get con parametros porque javascript no soporta sobrecarga de metodos!
  getById(Id: number) {
    var items: Persona = Personas.filter(x => x.IdPersona === Id)[0];
    return of(items);
  }

  post(obj: Persona) {
    obj.IdPersona = new Date().getTime();
    Personas.push(obj);
    return of(obj);
  }

  put(Id: number, obj: Persona) {
    var indice;
    var items = Personas.filter(function(item, index) {
      if (item.IdPersona === Id) {
        indice = index;
      }
    });
    Personas[indice] = obj;
    return of(obj);
  }

  delete(Id: number) {
    var items = Personas.filter(x => x.IdPersona === Id);
    items[0].Activo = !items[0].Activo;
    return of(items[0]);
  }
}
