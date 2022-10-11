import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RandomGuard implements CanActivate {
  private random = Math.random() > 0.1;

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.random;
  }
}
