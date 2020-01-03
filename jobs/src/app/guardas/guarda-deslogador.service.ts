import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root'
})
export class GuardaDeslogadorService implements CanActivate {
  
  constructor(private store: StoreService) { }
  
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
    if(this.store.usuarioLogado){
      this.store.usuarioLogado = false;
    }
    return true;
  }

}
