import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CdaelocetestjhipsterSharedModule } from 'app/shared/shared.module';
import { CdaelocetestjhipsterCoreModule } from 'app/core/core.module';
import { CdaelocetestjhipsterAppRoutingModule } from './app-routing.module';
import { CdaelocetestjhipsterHomeModule } from './home/home.module';
import { CdaelocetestjhipsterEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CdaelocetestjhipsterSharedModule,
    CdaelocetestjhipsterCoreModule,
    CdaelocetestjhipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CdaelocetestjhipsterEntityModule,
    CdaelocetestjhipsterAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class CdaelocetestjhipsterAppModule {}
