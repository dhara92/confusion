import { Injectable } from '@angular/core';
import { Leader } from 'src/app/shared/Leader';
import { LEADERS } from 'src/app/shared/Leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Leader[] {
    return LEADERS;
  }
  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
