import { Injectable } from '@angular/core';
import { concat, concatMap, delay, EMPTY, from, interval, map, Observable, of, take, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {

  constructor() { }

  getLetters(strings: string[]): Observable<string> {
  return from(strings).pipe(
    concatMap((str) =>
      this.getSingleStringLetters(str)
    )
  );
}
  
  private getSingleStringLetters(str: string): Observable<string> {
    return from(str).pipe(
      concatMap((char) =>
        of(char).pipe(delay(500)) // 1 second delay for each character
      )
    );
  } 
}