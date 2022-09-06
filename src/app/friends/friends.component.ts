import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogsComponent } from './../dialogs/dialogs.component';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  id:number | undefined;  
  constructor(public dialog: MatDialog,private _router:Router) { }

  ngOnInit(): void {
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
