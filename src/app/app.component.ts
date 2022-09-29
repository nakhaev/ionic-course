import { Component, OnInit } from '@angular/core';
import { MockService } from './services/mock.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  currentRoute;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected mockService: MockService,
    protected router: Router
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart),
        map(event => event as NavigationStart),  // appease typescript
      )
      .subscribe(
        event => {
          this.checkUser(event.url);
        }
      );
  }

  private checkUser(currentPage) {
    if (
      currentPage === '/sign-in' ||
      currentPage === '/sign-up' ||
      currentPage === '/forgot-password' ||
      currentPage === '/about'
    ) { return; }

    if (!this.mockService.checkLoggedIn()) {
      this.router.navigate(['/sign-in']);
    }
  }
}
