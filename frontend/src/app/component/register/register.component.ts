import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  error: boolean = false;

  constructor(private userService: UserService, private router: Router) {

  }

  
  listUser: Array<User> = [];

  newUser:User = {
    login:'',
    password:''
  };

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (data:Array<User>) => { this.listUser = data; }
    
    }); 
  }

  test():void{
    console.log(this.listUser);
  }

  register():void {
    this.test();
      console.log(this.newUser)
      for(let i:number = 0;i<this.listUser.length;i++)
      {
        if(this.newUser.login == this.listUser[i].login)
        {
          this.error = true;
          return
        }
      }
      this.userService.register(this.newUser).subscribe({
        next: (data:any) => {
          this.listUser.push(data);
          this.router.navigate([''])
        }
      });
      
  }

}
