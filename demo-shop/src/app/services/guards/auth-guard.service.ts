import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {UserService} from "../user.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private userService: UserService,
              private router: Router) {
  }

  canActivate() {
    if (this.userService.isUserDefined()) {
      return true;
    }
    console.log('AuthGuardService - NoAuth user');
    this.router.navigate(['/login']);
    return false;
  }
}