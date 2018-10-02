import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
  getParamsSubscription: Subscription;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.getParamsSubscription = this.router.params.subscribe(params => {
      const id = +params['id'];
      console.log('params : ', id);
      console.log('getUser : ', this.getUserFromUserList(id));
    });
  }

  ngOnDestroy(): void {
    this.getParamsSubscription.unsubscribe();
  }

  getUserFromUserList(id: number): {id: number, name: string} {
    return this.users.find(element => {
      return element.id === id;
    });

  }

}
