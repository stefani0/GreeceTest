import { Component } from '@angular/core';
import { NavItems } from 'src/app/nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  providers: [NavItems]
})
export class DefaultLayoutComponent  {

  public navItems: any;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  

  constructor( 
    public nav: NavItems) {
    const i = nav.navItems;
    this.navItems = i;   

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

 }



}
