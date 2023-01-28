import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-mdp-oublie',
  templateUrl: './mdp-oublie.component.html',
  styleUrls: ['./mdp-oublie.component.css']
})
export class MdpOublieComponent {

  constructor(private userService: UserService){ }

  retour:string = '';
  userlist: Array<User> = []
  error: boolean = false;
  user: User = { login: '', password: '' };

  recherche():void{
    console.log(this.user.login)
    for(let i = 0; i<this.userlist.length; i++){
      if(this.user.login == this.userlist[i].login){
        this.retour = this.userlist[i].password
        return
      }
    }
  }

  
  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (data:Array<User>) => { this.userlist = data; }
    }); 
  }



  
 

}
