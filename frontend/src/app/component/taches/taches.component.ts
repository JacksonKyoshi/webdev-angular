import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/model/tache';
import { TachesService } from 'src/app/service/taches.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
  taches: Array<Tache> = [];
  newTacheIndef: Tache = {
    titre : '',
    termine : false,
    statut:0
  };  

  taches2: Array<Tache> = [];
  newTacheAttente: Tache = {
    titre : '',
    termine : false,
    statut:1
  };  

  taches3: Array<Tache> = [];
  newTacheCour: Tache = {
    titre : '',
    termine : false,
    statut:2
  };  

  taches4: Array<Tache> = [];
  newTacheTermine: Tache = {
    titre : '',
    termine : true,
    statut:3
  };  
  
  filter:string = 'Tous';

  constructor(private tacheService: TachesService,
    private userService: UserService,
    private router: Router){ }
  
  ngOnInit(): void {
    this.tacheService.getTaches().subscribe({
      next: (data:Array<Tache>) => { this.taches = data; }
    });

  }  

  ajouter(tache:any) {
    console.log(tache)
    if(tache.statut == 0)
    {
      this.tacheService.ajoutTaches(this.newTacheIndef).subscribe({
        next: (data) => {
          this.taches.push(data);
        }
      });
    }
    else if(tache.statut == 1)
    {
      this.tacheService.ajoutTaches(this.newTacheAttente).subscribe({
        next: (data) => {
          this.taches.push(data);
        }
      });
    }
    else if(tache.statut == 2)
    {
      this.tacheService.ajoutTaches(this.newTacheCour).subscribe({
        next: (data) => {
          this.taches.push(data);
        }
      });
    }
    else if(tache.statut == 3)
    {
      this.tacheService.ajoutTaches(this.newTacheTermine).subscribe({
        next: (data) => {
          this.taches.push(data);
        }
      });
    }
    
    
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

  loggout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['']);
    })
  }

  change(filter:string) {
    this.filter = filter;
  }
  test(var1:any,var2:any)
  {
    console.log(var1===var2)
    return var1===var2
  }
}
