import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/model/tache';
import { TachesService } from 'src/app/service/taches.service';
import { UserService } from 'src/app/service/user.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent  {


  statut:Array<string> = [
    "indefini",
    "attente",
    "Cour",
    "termine"
  ]
  
  filter:string = 'Tous';


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
  test(var1:any,var2:any)
  {
    console.log(var1===var2)
    return var1===var2
  }



}
