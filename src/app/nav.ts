import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavItems {
  public navItems: NavData[];

  private home = this.getComponents('Home', '/dashboard', 'icon-speedometer');

  private f_sistemi = this.getComponents('Sistemi', 'close', 'icon-puzzle');
  private accredita_sistema = this.getComponents(
    'Accredita Sistema',
    '/dashboard/accreditasistema',
    'icon-puzzle'
  );

  private sys = this.addChildren(this.f_sistemi, [this.accredita_sistema]);

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
  title?: boolean;
  children?: NavData[];
  variant?: string;
  divider?: boolean;
  class?: string;
}
