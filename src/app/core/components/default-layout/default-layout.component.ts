import { Component, OnDestroy } from '@angular/core';
import { NavItems } from 'src/app/nav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  providers: [NavItems]
})
export class DefaultLayoutComponent implements OnDestroy {

  public navItems: any;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  constructor(
    private router: Router,
    public nav: NavItems) {
    const i = nav.navItems;
    this.navItems = i;

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }


  changeUrl() {
    if (this.router.url !== '/dashboard') {
    }
  }

}
