import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss']
})
export class PalindromeComponent implements OnInit {


   // tslint:disable-next-line:ban-types
  breadcrumbs: Array<Object>;
  result: boolean;
  url: string = 'http://localhost:4200/';
  constructor(private router: Router, private route: ActivatedRoute) {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
        // tslint:disable-next-line: one-variable-per-declaration
      let currentRoute = this.route.root;
      do {
        this.result = false;
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach(routes => {
             if (routes.outlet === 'primary') {
                const routeSnapshot = routes.snapshot;
                routeSnapshot.url.map(segment =>  {
                  if (segment.path !== 'star') {
                      // tslint:disable-next-line:no-unused-expression
                       this.result = segment.path.split('').reverse().join('') === segment.path;
                   }
                  });
                this.url +=  routeSnapshot.url.map(segment =>  segment.path
                ).join('/');
                console.log('url   :' + this.url );

          }
        });
      } while (currentRoute);
    }); }

  ngOnInit() {
  }

}
