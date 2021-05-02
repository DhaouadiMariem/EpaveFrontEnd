import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';

import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';


import { from } from 'rxjs';
import { AjouterExpertComponent } from 'app/ajouter-expert/ajouter-expert.component';
import { AjouterGestionnaireComponent } from 'app/ajouter-gestionnaire/ajouter-gestionnaire.component';
import { AjouterEpavisteComponent } from 'app/ajouter-epaviste/ajouter-epaviste.component';
import { RedigerRapportComponent } from 'app/rediger-rapport/rediger-rapport.component';
import { ListeRapportsPreComponent } from 'app/liste-rapports-pre/liste-rapports-pre.component';
import { VentesEnCoursComponent } from 'app/ventes-en-cours/ventes-en-cours.component';
import { DeposerOffreComponent } from 'app/deposer-offre/deposer-offre.component';
import { MesRapportComponent } from 'app/mes-rapport/mes-rapport.component';
import { AccueilClientComponent } from 'app/accueil-client/accueil-client.component';
import { MesSinistresComponent } from 'app/mes-sinistres/mes-sinistres.component';
import { RapportPreComponent } from 'app/rapport-pre/rapport-pre.component';
import { ListeRapportFinComponent } from 'app/liste-rapport-fin/liste-rapport-fin.component';
import { RapportFinComponent } from 'app/rapport-fin/rapport-fin.component';
import { MesEpavesComponent } from 'app/mes-epaves/mes-epaves.component';

export const AdminLayoutRoutes: Routes = [
    { path:'accueil', component: HomeComponent},
    { path: 'sinistres',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'ajouterExpert',        component:AjouterExpertComponent},
    { path: 'ajouterGestionnaire',        component:AjouterGestionnaireComponent},
    { path: 'ajouterEpaviste',        component:AjouterEpavisteComponent},
    { path: 'redigerRapport',        component:RedigerRapportComponent},
    { path: 'listeRapportPre',        component:ListeRapportsPreComponent},
    { path: 'listeRapportFin',        component:ListeRapportFinComponent},
    { path: 'venteEnCours',        component:VentesEnCoursComponent},
    { path: 'deposeOffre',        component:DeposerOffreComponent},
    { path: 'accueilClient',        component:AccueilClientComponent},
    { path: 'mesRapport',        component:MesRapportComponent},
    { path: 'mesSinistres',        component:MesSinistresComponent},
    { path: 'rapportPre',        component:RapportPreComponent},
    { path: 'rapportFin',        component:RapportFinComponent},
    { path: 'MesEpaves',        component:MesEpavesComponent},



   



    


    


];
