import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SomeService {
  private state = new BehaviorSubject(null);

  public addState(data: any): void {
    this.state.next(data);
  }

  public getState(): Observable<any> {
    return this.state.asObservable();
  }
}
