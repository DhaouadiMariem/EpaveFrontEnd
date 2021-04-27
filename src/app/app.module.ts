import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AjouterExpertComponent } from './ajouter-expert/ajouter-expert.component';
import { AjouterGestionnaireComponent } from './ajouter-gestionnaire/ajouter-gestionnaire.component';
import { AjouterEpavisteComponent } from './ajouter-epaviste/ajouter-epaviste.component';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AjouterExpertComponent,
    AjouterGestionnaireComponent,
    AjouterEpavisteComponent,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
