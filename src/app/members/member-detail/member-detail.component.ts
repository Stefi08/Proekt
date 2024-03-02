import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersService } from 'src/app/_services/members.service';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit {
  member: Member | undefined;
  constructor(private memberService:MembersService,private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.loadMember();
  }
  loadMember(){
    const username=this.route.snapshot.paramMap.get('username');
    if(!username) return;
   this.memberService.getMember(username).subscribe({
    next:member =>member = member
   })
  }

}