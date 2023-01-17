import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(sources: any, term: any): any {
    if(term === '') {
      return sources;
    }

    return sources.filter((source: any) => {
      return source.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
