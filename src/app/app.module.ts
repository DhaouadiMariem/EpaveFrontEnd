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
import { RedigerRapportComponent } from './rediger-rapport/rediger-rapport.component';
import { ListeRapportsPreComponent } from './liste-rapports-pre/liste-rapports-pre.component';
import { VentesEnCoursComponent } from './ventes-en-cours/ventes-en-cours.component';
import { DeposerOffreComponent } from './deposer-offre/deposer-offre.component';
import { TraitementsComponent } from './traitements/traitements.component';
import { DetailsComponent } from './details/details.component';
import { MesRapportComponent } from './mes-rapport/mes-rapport.component';
import { AccueilClientComponent } from './accueil-client/accueil-client.component';
import { MesSinistresComponent } from './mes-sinistres/mes-sinistres.component';
import { RapportPreComponent } from './rapport-pre/rapport-pre.component';
import { ListeRapportFinComponent } from './liste-rapport-fin/liste-rapport-fin.component';
import { RapportFinComponent } from './rapport-fin/rapport-fin.component';
import { MesEpavesComponent } from './mes-epaves/mes-epaves.component';
import { RegisterComponent } from './register/register.component';





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
    RedigerRapportComponent,
    ListeRapportsPreComponent,
    VentesEnCoursComponent,
    DeposerOffreComponent,
    TraitementsComponent,
    DetailsComponent,
    MesRapportComponent,
    AccueilClientComponent,
    MesSinistresComponent,
    RapportPreComponent,
    ListeRapportFinComponent,
    RapportFinComponent,
    MesEpavesComponent,
    RegisterComponent,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
