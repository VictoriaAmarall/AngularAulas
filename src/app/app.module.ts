import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ContentComponent } from './componentes/content/content.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LogoComponent } from './componentes/header/logo/logo.component';
import { BuscaComponent } from './componentes/header/busca/busca.component';
import { NavlinksComponent } from './componentes/header/navlinks/navlinks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LogoComponent,
    BuscaComponent,
    NavlinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
