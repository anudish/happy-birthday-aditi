import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { Router} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DialogsComponent } from './../dialogs/dialogs.component';
import * as AOS from 'aos';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor(private snackbar: MatSnackBar,public dialog: MatDialog,private _router:Router, config: NgbCarouselConfig) { 
    config.interval = 3000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;  
  }
  id:number | undefined;
  ngOnInit(): void {
    AOS.init();
  }
  openDialog(id:number) {
      
    this.id=id
    const dialogRef = this.dialog.open(DialogsComponent,{
      width:'auto',height:'auto',
      data:{id:this.id}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
function timer(arg0: number, arg1: number): Observable<number> {
  throw new Error('Function not implemented.');
}

