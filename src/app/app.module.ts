import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';


//Services
import { AuthGuard } from './services/auth.guard';

//Material componentes necesarios
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatSlideToggleModule, MatButtonToggleModule, MatCardModule, MatButtonModule, MatToolbarModule,
  MatAutocompleteModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatSelectModule,
  MatFormFieldModule, MatInputModule, MatDatepickerModule, MatRadioModule, MatSliderModule,
  MatTabsModule, MatGridListModule, MatSnackBarModule, MatSidenavModule, MatChipsModule,
  MatDialogModule, MatDividerModule, MatExpansionModule, MatListModule, MatNativeDateModule,
  MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule,
  MatSortModule, MatStepperModule, MatTableModule, MatTooltipModule, MatMenuTrigger,
  MatPaginatorIntl, MatBadgeModule, MatBottomSheetModule, MatTreeModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher,
} from '@angular/material';

//our components
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PostContainerComponent } from './pages/post-container/post-container.component';
import { AddPostComponent } from './elements/add-post/add-post.component';
import { SinglePostComponent } from './elements/single-post/single-post.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UsersComponent } from './pages/users/users.component';
import { FriendsComponent } from './pages/friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    PostContainerComponent,
    LoginComponent,
    SinglePostComponent,
    AddPostComponent,
    HomeComponent,
    PerfilComponent,
    AddPostComponent,
    SignupComponent,
    UsersComponent,
    FriendsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    CdkTableModule, CdkTreeModule,
    MatChipsModule, MatDialogModule, MatDividerModule, MatTooltipModule,
    MatExpansionModule, MatListModule, MatNativeDateModule,
    MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRippleModule, MatSortModule, MatStepperModule, MatTableModule,
    MatGridListModule, MatSnackBarModule, MatSidenavModule,
    MatFormFieldModule, MatInputModule, MatButtonToggleModule, MatSlideToggleModule,
    MatButtonModule, MatCardModule, MatToolbarModule, MatAutocompleteModule,
    MatCheckboxModule, MatIconModule, MatMenuModule, MatSelectModule, MatDatepickerModule,
    MatRadioModule, MatSliderModule, MatTabsModule, MatBadgeModule, MatBottomSheetModule,
    MatTreeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
