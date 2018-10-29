import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {


  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, args:string) {
    if (!value) {
      return;
    }
    if(!args){
      return value;
    }

    args = args.toLowerCase();
    return value.filter((item) =>{
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }
}
