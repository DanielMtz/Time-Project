import { Component, OnInit, Inject, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  categoria: string;
  actividad: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
}

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss']
})
export class CategoryContainerComponent implements OnInit, OnChanges {
  activityForm = new FormGroup({
    category: new FormControl(),
    activity: new FormControl(),
    fecha: new FormControl(),
    horaInicio: new FormControl(),
    horaFin: new FormControl(),
  });
  categoryLabels: string[] = [
    'Semestre i',
    'Personal',
    'Extracurricular'
  ];
  activityLabels: string[] = [];
  categoryOptions: Observable<string[]>;
  activityOptions: Observable<string[]>;

  constructor(
    public dialogRef: MatDialogRef<CategoryContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  ngOnInit() {
    this.categoryOptions = this.activityForm.controls.category.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterCat(value))
      );
      this.ngOnChanges();
    }
  
    private _filterCat(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.categoryLabels.filter(option => option.toLowerCase().includes(filterValue)); 
    }    

    private _filterAct(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.activityLabels.filter(option => option.toLowerCase().includes(filterValue)); 
    }    


    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.activityForm.value);
    }

    onNoClick(): void {
      this.dialogRef.close();
      
    }

    ngOnChanges() {
      this.activityForm.controls.category.valueChanges.subscribe((category:string) => {
        if(category == "Semestre i") {
          this.activityLabels = [
            "Visitas a Empresa",
            "Lectura",
            "Estudio",
            "Ejecución de Tareas",
            "Clases",
            "Asesorías",
            "Otro"
          ]
        } else if(category == "Personal") {
          this.activityLabels = [
            "Comida",
            "Aseo",
            "Ejercicio",
            "Relajación",
            "Eventos sociales",
            "Convivencia Familar",
            "Sueño",
            "Otro"
          ]
        } else if(category == "Extracurricular") {
          this.activityLabels = [
            "Deporte",
            "Recreación",
            "Idiomas",
            "Comites / Grupos",
            "Conferencias / Talleres",
            "Otro"
          ]
        }
        this.activityOptions = this.activityForm.controls.activity.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filterAct(value))
          );
      });
    }
  }
  

    