import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthenticationService, User} from "./commons/services/authentication.service";
import {AppCommonService} from "./commons/services/app-common.service";

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styles : [`:host{background-color:blue}`],
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  private isLoggedIn:boolean = false;
  private isMenuExpanded:boolean = false;

  constructor(private _authenticationService:AuthenticationService,private _appCommonService:AppCommonService){

  }

  ngOnInit(){
    this.isLoggedIn = this._authenticationService.isLoggedIn();
    this._authenticationService.loginUserInfo.subscribe((userInfo:User)=>this.isLoggedIn = !!userInfo);
    this._appCommonService.menuToggleStream.subscribe((isExpand:boolean)=>this.isMenuExpanded=isExpand);
  }
}