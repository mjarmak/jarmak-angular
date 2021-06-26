import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MusicComponent } from './pages/music/music.component';
import { PhotographyComponent } from './pages/photography/photography.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent },
    { path: 'music', component: MusicComponent },
    { path: 'music/:track', component: MusicComponent },
    { path: 'photography', component: PhotographyComponent },
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
