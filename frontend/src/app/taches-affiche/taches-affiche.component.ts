import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/model/tache';
import { TachesService } from 'src/app/service/taches.service';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-taches-affiche',
  templateUrl: './taches-affiche.component.html',
  styleUrls: ['./taches-affiche.component.css']
})
export class TachesAfficheComponent {
  @Input() status: string = '';

  constructor(private tacheService: TachesService){}


  
  taches: Array<Tache> = [];
  newTache: Tache = {
    titre : '',
    termine : false,
    statut:'undefined'
  };  



  ajouter(tache:any,statu:string) {
    console.log(tache)
    this.newTache.statut = statu
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

  test(var1:any,var2:any)
  {

    return var1===var2
  }


}


