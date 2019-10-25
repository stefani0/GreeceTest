import { Component, OnDestroy } from '@angular/core';
import { NavItems } from 'src/app/nav';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';

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
  form:FormGroup;

   testUser = {
    id: 1,
    username: 'test',
    email : 'test',
    pass : 'test'
  }
  

  constructor(
    private authService: AuthService,
    private fb:FormBuilder,
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


    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
});
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }


  changeUrl() {
    if (this.router.url !== 'home') {
    }
  }

  login() {
    const val = this.form.value;

    if (val.email == this.testUser.email && val.password == this.testUser.pass) {
        this.authService.loginauth()
            .subscribe(
                () => {
                    console.log("User is logged in");
                  this.router.navigateByUrl('/home/');
                }
            );
    }
}

}
