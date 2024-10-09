import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, public dialog: MatDialog,
    
    ) {}


    login() {
      let dialogRef = this.dialog.open(LoginComponent);
      dialogRef.afterClosed().subscribe(res => {
  
      })
    }
}
