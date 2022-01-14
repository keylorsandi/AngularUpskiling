import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-bread-crums',
  templateUrl: './bread-crums.component.html',
  styleUrls: ['./bread-crums.component.scss']
})
export class BreadCrumsComponent implements OnDestroy {

  public title!: string;
  public getTitleSub$:Subscription;
  constructor(private router: Router) {
    this.getTitleSub$ = this.getTitle().subscribe(data => {
      this.title = data.title;
      document.title = data.title;
    });
  }

  ngOnDestroy(): void {
  this.getTitleSub$.unsubscribe();
  }

  getTitle() {
    return this.router.events
      .pipe(
        filter<any>(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }
}
