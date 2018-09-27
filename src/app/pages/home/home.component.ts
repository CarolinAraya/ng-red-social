import {MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  public mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(private route: ActivatedRoute, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, public authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  logout() {
    this.authService.logout()
    .then(() => {
      console.log("holi");
      this.router.navigate(['login'], { relativeTo: this.route.parent });//poner ruta?
    })
  }

}
