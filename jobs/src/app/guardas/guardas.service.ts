import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root'
})
export class GuardasService implements CanActivate {
  
  constructor(private store: StoreService, private router: Router) { }
  
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, 
  state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
    if(this.store.usuarioLogado){
      return true;
    }
    
    this.router.navigate(['']);

    return false;

  }

}
