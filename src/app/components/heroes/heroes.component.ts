import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/Interfaces/hero';
import { HeroService } from 'src/app/services/hero-service.service';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[]=[];

  constructor(private heroService:HeroService) {
    
   }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes():void
  {
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes)
  }

}
