import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavItems {
  public navItems: NavData[];

  private home = this.getComponents('Web App', '/dashboard', 'icon-speedometer');
  private f_sistemi = this.getComponents('Menu', 'close', 'icon-puzzle');
  private main = this.getComponents(
    'Main Page',
    '/dashboard/exam1/main',
    'icon-puzzle'
  );

  private contact = this.getComponents(
    'Contact',
    '/dashboard/exam1/contact',
    'icon-puzzle'
  );

  private sys = this.addChildren(this.f_sistemi, [this.main, this.contact]);

  constructor() {
    this.navItems = [this.home];
    this.navItems.push(this.sys);
  }

  private getComponents(name, url, icon) {
    const obj = { name, url, icon };
    return obj;
  }

  private addChildren(components, childrencomponents) {
    const obj = components;
    obj.children = childrencomponents;
    return obj;
  }
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  children?: NavData[];

}
