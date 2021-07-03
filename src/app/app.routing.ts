import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MusicRedirectComponent } from './pages/music-redirect/music-redirect.component';
import { LinkRedirectComponent } from './pages/link-redirect/link-redirect.component';
import { LinksComponent } from './pages/links/links.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 's/:track', component: MusicRedirectComponent },
    { path: 'l/:link', component: LinkRedirectComponent },
    { path: 'links', component: LinksComponent },
    // { path: 'photography', component: PhotographyComponent },
    
    { path: ':link', redirectTo: '/l/:link', pathMatch: 'full' },
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
