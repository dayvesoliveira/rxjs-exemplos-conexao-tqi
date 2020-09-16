import { Observable } from 'rxjs';

/* const observable = Observable.create(observer => {
  observer.next(1);
}); */

const observable2 = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);

  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 4000);
});

console.log('antes do subscribe');

// const observer = {
//   next(x) { console.log('got value ' + x); },
//   error(err) { console.error('something wrong occurred: ' + err); },
//   complete() { console.log('done'); }
// };

// observable.subscribe(observer);

observable2.subscribe((observer) => console.log('observer: ', observer));

console.log('depois do subscribe');
