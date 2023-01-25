import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from 'src/app/model/status';
import { Tache } from 'src/app/model/tache';
import { TachesService } from 'src/app/service/taches.service';
import { UserService } from 'src/app/service/user.service';
import {LoginComponent} from 'src/app/component/login/login.component'
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent  {

  user:string = '';

  statut: Array<Status> = [];
  newStatus:Status = {
    status:'',
    user:''
  };


  
  taches: Array<Tache> = [];

  newTache: Tache = {
    titre : '',
    termine : false,
    statut:'undefined',
    user:''
  };  



  filter:string = 'Tous';


  ngOnInit(): void {
    this.tacheService.getStatus().subscribe({
      next: (data:Array<Status>) => { this.statut = data; }
    
    }); 

    this.tacheService.getTaches().subscribe({
      next: (data:Array<Tache>) => { this.taches = data; }
    });

    this.userService.LogUser().subscribe({
      next: (data:string) => { this.user = data; }
    });
  }


  
  

  supprimerList(List:Status){
    let supprimer = (tache:Tache) =>{
        this.tacheService.removeTaches(tache).subscribe({
          next: (data) => {
            this.taches = this.taches.filter(t => tache._id != t._id);
          }
        });}

    this.taches.forEach((task)=>{
      if(task.statut == List.status && task.user == this.user)
      {
       supprimer(task)
      }
    })

    this.tacheService.removeStatus(List).subscribe({
      next: (data) => {
        this.statut = this.statut.filter(t => List._id != t._id);
      }
    });
    
}



  addListe(newStatus:string){
    this.newStatus.user=this.user;
      this.tacheService.ajoutStatus(this.newStatus).subscribe({
        next: (data) => {
          this.statut.push(data);
        }
      });
  }

  constructor(private tacheService: TachesService,
    private userService: UserService,
    private router: Router){ }
  
 


  loggout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['']);
    })
  }

  change(filter:string) {
    this.filter = filter;
  }


}

