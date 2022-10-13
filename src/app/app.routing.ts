import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MusicRedirectComponent } from './pages/music-redirect/music-redirect.component';
import { LinkRedirectComponent } from './pages/link-redirect/link-redirect.component';
import { LinksComponent } from './pages/links/links.component';
import { LandingFrComponent } from './pages/landing-fr/landing-fr.component';
import { LandingNlComponent } from './pages/landing-nl/landing-nl.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'fr', component: LandingFrComponent },
    { path: 'nl', component: LandingNlComponent },
    { path: 's/:track', component: MusicRedirectComponent },
    { path: 'l/:link', component: LinkRedirectComponent },
    { path: 'links', component: LinksComponent },
    
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
