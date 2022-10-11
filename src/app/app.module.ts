import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './pages/landing/landing.component';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MusicRedirectComponent } from './pages/music-redirect/music-redirect.component';
import { LinkRedirectComponent } from './pages/link-redirect/link-redirect.component';
import { LinksComponent } from './pages/links/links.component';
import { LinkListComponent } from './components/link-list/link-list.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http)
}

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LandingComponent,
        MusicRedirectComponent,
        LinkRedirectComponent,
        LinksComponent,
        LinkListComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        YouTubePlayerModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
