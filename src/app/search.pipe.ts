import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any ,searchWord:any) :any {
    return movies.filter((movie:any)=>{
    return movie.title.includes(searchWord);
  });
   
  }

}
