import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/model/tache';
import { User } from 'src/app/model/user';
import { TachesService } from 'src/app/service/taches.service';
import { UserService } from 'src/app/service/user.service';
import { Status } from '../../model/status';



@Component({
  selector: 'app-taches-affiche',
  templateUrl: './taches-affiche.component.html',
  styleUrls: ['./taches-affiche.component.css']
})
export class TachesAfficheComponent {
  @Input() status: string = '';

  constructor(private tacheService: TachesService,private UserService:UserService){}


  user:string = ''
  taches: Array<Tache> = [];

  newTache: Tache = {
    titre : '',
    termine : false,
    statut:'',
    user:''
  };  


  ajouter(tache:any,statu:string) {
    
    this.newTache.statut = statu;
    this.newTache.user = this.user;
    console.log(tache)
      this.tacheService.ajoutTaches(this.newTache).subscribe({
        next: (data) => {
          this.taches.push(data);
        }
      });

  }



  ngOnInit(): void {
    this.tacheService.getTaches().subscribe({
      next: (data:Array<Tache>) => { this.taches = data; }
    });

    this.UserService.LogUser().subscribe({
      next: (data:string) => { this.user = data; }
    });


  }  


  supprimer(tache: Tache): void {
    this.tacheService.removeTaches(tache).subscribe({
      next: (data) => {
        this.taches = this.taches.filter(t => tache._id != t._id);
      }
    });
    
  }

  modifier(tache: Tache) {
    tache.termine = !tache.termine;
    this.tacheService.updateTaches(tache).subscribe({
      next: (data) => {
      }
    });
  }
}


