import { Component } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CategoryContainerComponent } from './containers/category-container/category-container.component';

export interface Activities {
  actividad: string;
  lista: number;
  categoria: string;
  horaIn: string;
  horaFin: string;
  minutos: number;
}

const ELEMENT_DATA: Activities[] = [
  {lista: 1, actividad: 'Sueño', categoria: 'Personal', horaIn: "10:00",horaFin: "12:00", minutos: 60},
  {lista: 2, actividad: 'Aseo', categoria: 'Personal', horaIn: "10:00",horaFin: "12:00", minutos: 60},
  {lista: 3, actividad: 'Lectura', categoria: 'Extracurricular', horaIn: "10:00",horaFin: "12:00", minutos: 60},
  {lista: 4, actividad: 'Estudio', categoria: 'Semestre i', horaIn: "10:00",horaFin: "12:00", minutos: 60},
  {lista: 5, actividad: 'Comida', categoria: 'Personal', horaIn: "10:00",horaFin: "12:00", minutos: 60},
  {lista: 6, actividad: 'Visita', categoria: 'Semestre i', horaIn: "10:00",horaFin: "12:00", minutos: 60},
  {lista: 7, actividad: 'Ejercicio', categoria: 'Personal', horaIn: "10:00",horaFin: "12:00", minutos: 60},
  {lista: 8, actividad: 'Lectura', categoria: 'Extracurricular', horaIn: "10:00",horaFin: "12:00", minutos: 60},
  {lista: 9, actividad: 'Sueño', categoria: 'Personal', horaIn: "10:00",horaFin: "12:00", minutos: 60},
];

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent { 
  displayedColumns: string[] = ['lista', 'actividad', 'categoria', 'horaIn', 'horaFin', 'minutos'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  categoria: string;
  actividad: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  
  constructor(public dialog: MatDialog) {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CategoryContainerComponent, {
      width: '300px',
      data: {  categoria: this.categoria,
        actividad: this.actividad,
        fecha: this.fecha,
        horaInicio: this.horaInicio,
        horaFin: this.horaFin}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.categoria = result;
    });
  }
      
}
