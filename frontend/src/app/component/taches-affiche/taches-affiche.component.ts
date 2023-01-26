import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
  statut: Array<Status> = [];

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
    this.newTache.titre = '';

  }



  ngOnInit(): void {
    this.tacheService.getTaches().subscribe({
      next: (data:Array<Tache>) => { this.taches = data; }
    });

    this.UserService.LogUser().subscribe({
      next: (data:string) => { this.user = data; }
    });

    this.tacheService.getStatus().subscribe({
      next: (data:Array<Status>) => { this.statut = data; }
    
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


  down(tache:Tache){
    console.log(this.statut)
    for(let i = 0;i<this.statut.length;i++)
    {
      if(tache.statut == this.statut[i].status){
        let j = i+1;
        for(j;j<this.statut.length;j++)
        {
          if(tache.user == this.statut[j].user)
          {
            console.log(this.statut[j].status)
            tache.statut = this.statut[j].status
            this.tacheService.updateTaches(tache).subscribe({
              next: (data) => {
                this.tacheService.getTaches().subscribe({
                  next: (data:Array<Tache>) => { this.taches = data; }
                });
              }
            });     
            location.reload();
            return
          }
        }
      }
    }
  }

  up(tache:Tache){
    for(let i = 0;i<this.statut.length;i++)
    {
      if(tache.statut == this.statut[i].status){
        let j = i-1;
        for(j;j<this.statut.length;j--)
        {
          if(tache.user == this.statut[j].user)
          {
            tache.statut = this.statut[j].status
            this.tacheService.updateTaches(tache).subscribe({
              next: (data) => {
                this.tacheService.getTaches().subscribe({
                  next: (data:Array<Tache>) => { this.taches = data; }
                });
              }
            });  
            location.reload();
            return
          }
        }
      }
    }
    
  }

  drop(event: CdkDragDrop<Tache[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(event)
    }
  }
  
}


