import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogsComponent } from './../dialogs/dialogs.component';
import * as AOS from 'aos';
@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  constructor(private snackbar: MatSnackBar,public dialog: MatDialog,private _router:Router) { }
  id:number | undefined;  
  ngOnInit(): void {
    AOS.init();
  }
  openDialog(id:number) {
     
    this.id=id
    const dialogRef = this.dialog.open(DialogsComponent,{
      width:'auto', height:'auto',
      data:{id:this.id}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
