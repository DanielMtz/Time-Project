import { Component, OnInit, Inject } from '@angular/core';
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
export class CategoryContainerComponent implements OnInit {
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
  activityLabels: string[] = [
    'Semestre i',
    'Personal',
    'Extracurricular'
  ];
  categoryOptions: Observable<string[]>;
  activityOptions: Observable<string[]>;

  constructor(
    public dialogRef: MatDialogRef<CategoryContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  ngOnInit() {
    this.categoryOptions = this.activityForm.controls.category.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
      );
    this.activityOptions = this.activityForm.controls.activity.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
      );
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.categoryLabels.filter(option => option.toLowerCase().includes(filterValue)); 
    }    

    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.activityForm.value);
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
  }
  

    