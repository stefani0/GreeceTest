import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavItems {
  public navItems: NavData[];

  private home = this.getComponents('Home', '/dashboard', 'icon-speedometer');

  private f_sistemi = this.getComponents('Sistemi', 'close', 'icon-puzzle');
  private exam1 = this.getComponents(
    'Exam Number 1',
    '/dashboard/exam1/test1',
    'icon-puzzle'
  );
  private exam2 = this.getComponents(
    'Exam Number 2',
    '/dashboard/exam1/test2',
    'icon-puzzle'
  );

  private exam3 = this.getComponents(
    'Exam Number 3',
    '/dashboard/exam1/test3',
    'icon-puzzle'
  );

  private sys = this.addChildren(this.f_sistemi, [this.exam1, this.exam2, this.exam3]);

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
