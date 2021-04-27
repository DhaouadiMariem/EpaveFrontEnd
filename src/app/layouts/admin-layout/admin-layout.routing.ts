import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';

import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from 'app/login/login.component';

import { from } from 'rxjs';
import { AjouterExpertComponent } from 'app/ajouter-expert/ajouter-expert.component';
import { AjouterGestionnaireComponent } from 'app/ajouter-gestionnaire/ajouter-gestionnaire.component';
import { AjouterEpavisteComponent } from 'app/ajouter-epaviste/ajouter-epaviste.component';

export const AdminLayoutRoutes: Routes = [
    { path:'accueil', component: HomeComponent},

    { path: 'sinistres',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'login',        component: LoginComponent},
    { path: 'ajouterExpert',        component:AjouterExpertComponent},
    { path: 'ajouterGestionnaire',        component:AjouterGestionnaireComponent},
    { path: 'ajouterEpaviste',        component:AjouterEpavisteComponent},





];
