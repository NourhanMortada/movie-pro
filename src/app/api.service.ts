import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';








@Injectable({
  providedIn: 'root'
})
export class ApiService {

  


  constructor(private _HttpClient : HttpClient) {
  
  }
    
    getnowPlaying(pageNum:any) : Observable<any>{

      return this._HttpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=dc44e6d7a05dbdf0df54cc517d39ebb0&language=en-US&page='+pageNum);
   
    };

    singleMovie(id:any) : Observable<any>{

      return this._HttpClient.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=dc44e6d7a05dbdf0df54cc517d39ebb0&language=en-US')

    };

   
      
    }
  

