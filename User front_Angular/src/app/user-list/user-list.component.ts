import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private route: ActivatedRoute,private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  userDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }

  updateUser(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getUser();
    })
  }

}