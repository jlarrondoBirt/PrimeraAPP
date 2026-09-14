import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonCard, IonNote, IonButton, IonList, IonItem, IonAvatar, IonLabel, IonBadge } from '@ionic/angular';;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonBadge, IonLabel, IonItem, IonButton, IonNote, IonCard, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonNote, IonList, IonAvatar, ],
})
export class HomePage {
  constructor() {}

// INTERPOLACION: valores que se mostrarán en el template {{}}
titulo: string = "Primera Aplicación"
descripcion: string = "Aprendiendo Ionic y Angular"

// PROPERTY BINDING: Variables qu se vinculan a propiedades de componentes []
colorBoton: string = "primary";
botonDeshabilitado: boolean = false;

// EVENT BILDING:
contador: number = 0;
incrementar():void{
  this.contador++;
  this.colorBoton = this.contador >=5 ? "danger" : "primary";
}

resetear():void{
  this.contador=0;
  this.colorBoton="primary";
}

// ION-LIST y lógica
alumnos= [
  {nombre: "Ana García", nota: 9},
  {nombre: "Luís Martinez", nota: 7},
  {nombre: "María Lopez", nota: 8},
  {nombre: "Pedro Sanchez", nota: 9},
];

colorNota (nota: number): string {
  if (nota >= 9) return "success";
  if (nota >= 6) return "warning";
  return "danger";

}
}

