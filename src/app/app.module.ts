import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";
import "hammerjs";

import { FuseModule } from "@fuse/fuse.module";
import { FuseSharedModule } from "@fuse/shared.module";
import {
    FuseProgressBarModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,
} from "@fuse/components";
import { MaterialModule } from 'app/shared/material/material.module';
import { fuseConfig } from "app/fuse-config";
import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { OnlineUserComponent } from './main/online-user/online-user.component';
import { SubscriptionComponent } from './main/subscription/subscription.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RegisterComponent } from './main/register/register.component';
import { LoginComponent } from './main/login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'online-user',
        component: OnlineUserComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'subscription',
        component: SubscriptionComponent,
        canActivate: [AuthGuardService]
    },
];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        OnlineUserComponent,
        SubscriptionComponent,
        RegisterComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        MaterialModule
       
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
