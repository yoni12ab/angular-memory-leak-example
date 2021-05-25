import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SomeService {
  private state = new BehaviorSubject(null);
  private stateSubject = new Subject();

  public addState(data: any): void {
    this.state.next(data);
  }

  public getState(): Observable<any> {
    return this.state.asObservable();
  }

  public getStateSubject(): Observable<any> {
    return this.stateSubject.asObservable();
  }
}
