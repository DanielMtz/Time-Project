import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Time Project';

  ngOnInit() {
    $(document).ready(function() {
      $('#formModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
  });
  }
}
