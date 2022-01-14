import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnDestroy{
  public intervalSubs: Subscription;
  constructor() {

    /* this.retunObservable().pipe(
       retry(1)
     ).subscribe(
       valor => {
         console.log('subs: ', valor);
       },
       error => {
         console.error('Error: ', error);
       },
       () => {
         console.info('Se completo satisfactoriamente');
       }
     );*/
    this.intervalSubs = this.returnInterval().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number> {
    return interval(500).pipe(
      //take(15),
      map(valor => valor + 1),
      filter(valor => (valor % 2 === 0) ? false : true)//aqui imprime los numeros impares
    )
  }

  retunObservable(): Observable<number> {
    let i = 0;

    /* const obs$ = new Observable<number>((observer) => {

       setInterval(() => {
         i++;
         if (i <= 10) {
           observer.next(i)
         } else {
           // observer.closed;  con este comando me des subscirbo del observable
           observer.complete();
         }

         if (i === 2) {
           observer.error('el intervalo llego a ' + i)
         }

       }, 1000)
     });
     return obs$;*/
    return new Observable<number>((observer) => {

      setInterval(() => {
        i++;
        if (i <= 10) {
          observer.next(i)
        } else {
          // observer.closed;  con este comando me des subscirbo del observable
          observer.complete();
        }

        if (i === 2) {
          observer.error('el intervalo llego a ' + i)
        }

      }, 1000)
    });
  }

}
