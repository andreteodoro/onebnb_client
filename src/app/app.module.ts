import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, ButtonsModule, CarouselModule, CollapseModule, DatepickerModule, DropdownModule, ModalModule, PaginationModule, TypeaheadModule} from "ng2-bootstrap/ng2-bootstrap";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { Property } from './shared/property';

import { PropertiesService } from './shared/properties.service';
import { UsersService } from './shared/users.service';
import { ReservationService } from './shared/reservation.service';
import { TalksService } from './shared/talks.service';


import { Angular2TokenService, A2tUiModule} from 'angular2-token';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';
import { UpdatePasswordComponent } from './users/update-password/update-password.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './shared/search/search.component';
import { FilterComponent } from './shared/filter/filter.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { PropertyBoxComponent } from './shared/property-box/property-box.component';
import { MapComponent } from './shared/map/map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { ReservationBoxComponent } from './shared/reservation-box/reservation-box.component';
import { LightboxComponent } from './shared/lightbox/lightbox.component';
import { CommentBoxComponent } from './shared/comment-box/comment-box.component';
import { UserDetailBoxComponent } from './shared/user-detail-box/user-detail-box.component';
import { SendMessageComponent } from './shared/send-message/send-message.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { MenuComponent } from './shared/menu/menu.component';
import { TalksListComponent } from './talks/talks-list/talks-list.component';
import { TalksChatComponent } from './talks/talks-chat/talks-chat.component';
import { TruncateModule } from 'ng2-truncate';
import { PropertyTripsComponent } from './property/property-trips/property-trips.component';
import { ReservationDetailsComponent } from './reservation/reservation-details/reservation-details.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ReactiveFormsModule } from '@angular/forms';
import { PropertyFormComponent } from './property/property-form/property-form.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyReservationsComponent } from './property/property-reservations/property-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    UserEditComponent,
    ResetPasswordComponent,
    UpdatePasswordComponent,
    ResultsComponent,
    SearchComponent,
    FilterComponent,
    PaginationComponent,
    PropertyBoxComponent,
    MapComponent,
    PropertyDetailsComponent,
    ReservationBoxComponent,
    LightboxComponent,
    CommentBoxComponent,
    UserDetailBoxComponent,
    SendMessageComponent,
    NotfoundComponent,
    MenuComponent,
    TalksListComponent,
    TalksChatComponent,
    PropertyTripsComponent,
    ReservationDetailsComponent,
    PropertyFormComponent,
    PropertyListComponent,
    PropertyReservationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
    DropdownModule.forRoot(),
    CollapseModule,
    DatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    Ng2AutoCompleteModule,
    TruncateModule,
    TypeaheadModule,
    SimpleNotificationsModule.forRoot(),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCgyttVo10YdzIlAgAe63Np3S2jwhzq1ME' })
  ],
  providers: [PropertiesService, UsersService, ReservationService, Angular2TokenService, TalksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
