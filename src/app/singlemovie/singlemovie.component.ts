import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.css']
})
export class SinglemovieComponent implements OnInit {

  constructor(private sevice : ApiService , private _ActivatedRoute:ActivatedRoute) { }

  movieDestail: any;
  imagepath: string = 'https://image.tmdb.org/t/p/w500/';
  movieId :any;

  ngOnInit(): void {

    this.movieId = this._ActivatedRoute.snapshot.params['id'];

    console.log(this._ActivatedRoute.snapshot.params['id'])







    this.sevice.singleMovie(this.movieId).subscribe({
      next:(data)=>{
      console.log(data);
      this.movieDestail = data;
      
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
