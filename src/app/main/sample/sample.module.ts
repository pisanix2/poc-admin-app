import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@core/core.module';

import { SampleComponent } from './sample.component';
import { SampleService } from './sample.service';
import { CreateComponent } from './create/create.component';

const routes = [
    {
        path     : 'sample',
        component: SampleComponent
    }, {
        path: 'product/create',
        component: CreateComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent,
        CreateComponent
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
