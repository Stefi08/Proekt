import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css',
  
})
export class MemberCardComponent implements OnInit {
  @Input() member:Member | undefined;

  constructor(){}
  
  ngOnInit(): void {
    
  }

}
