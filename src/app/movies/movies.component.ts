import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  data = new Subscription();

  constructor(private _ApiService : ApiService) { }

  searchWord:string="";

  pages=[1,2,3,4,5];
   
  movieContianers: any[] = [];

  imagepath: string = 'https://image.tmdb.org/t/p/w500/';

  selectPage(selectpage:any)
  {
     this._ApiService.getnowPlaying(selectpage).subscribe({
    next: (data) =>{
      console.log(data.results)
      this.movieContianers = data.results;
      
    },
    error: (error)=> {
      console.log(error)
    }

  })
}
  ngOnInit(): void {
    this.data = this._ApiService.getnowPlaying(1).subscribe({
      next: (data) =>{
        console.log(data.results)
        this.movieContianers = data.results;
        
      },
      error: (error)=> {
        console.log(error)
      }

    });
  };

  ngOnDestroy(): void {
   
    this.data.unsubscribe();
  }

}
