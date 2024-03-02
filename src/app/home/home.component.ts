import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, RegisterComponent,FormsModule]
})
export class HomeComponent implements OnInit {
   registerMode = false;
   users:any;
  constructor(){}
  ngOnInit(): void {
   
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }
  
  cancelRegisterMode(event:boolean){
       this.registerMode = event;
  }
}
