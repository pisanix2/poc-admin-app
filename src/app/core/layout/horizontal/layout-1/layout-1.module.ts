import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ContentModule } from '@core/layout/components/content/content.module';
import { FooterModule } from '@core/layout/components/footer/footer.module';
import { NavbarModule } from '@core/layout/components/navbar/navbar.module';
import { QuickPanelModule } from '@core/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from '@core/layout/components/toolbar/toolbar.module';

import { HorizontalLayout1Component } from '@core/layout/horizontal/layout-1/layout-1.component';

@NgModule({
    declarations: [
        HorizontalLayout1Component
    ],
    imports     : [
        MatSidenavModule,

        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        HorizontalLayout1Component
    ]
})
export class HorizontalLayout1Module
{
}
