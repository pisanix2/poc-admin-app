import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@core/core.module';

import { SampleComponent } from './sample.component';
import { SampleService } from './sample.service';

const routes = [
    {
        path     : 'sample',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    providers: [
        SampleService
    ],
    imports     : [
        RouterModule.forChild(routes),
        CoreModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
