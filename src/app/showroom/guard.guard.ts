import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { ProdgrillService } from './prodgrill.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private dataService:ProdgrillService ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean{
     return true

}
}
