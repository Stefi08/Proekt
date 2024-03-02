import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/_services/members.service';
import { Member } from 'src/app/models/member';
import { MemberCardComponent } from "../member-card/member-card.component";

@Component({
    selector: 'app-member-list',
    standalone: true,
    templateUrl: './member-list.component.html',
    styleUrl: './member-list.component.css',
    imports: [CommonModule, MemberCardComponent]
})
export class MemberListComponent implements OnInit{
  members:Member[]=[];

  constructor(private membersService:MembersService){}
  
  ngOnInit(): void {  
    this.loadMembers();
  }
  loadMembers(){
    this.membersService.getMembers().subscribe({
      next:members=>this.members=members
    })
  }
}
