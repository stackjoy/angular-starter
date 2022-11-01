import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './views.routing';
import { ViewsComponent } from './views.component';

@NgModule({
    imports: [
        CommonModule,
        routing,
    ],
    providers: [],
    declarations: [
        ViewsComponent,
    ],
    exports: []
})
export class ViewsModule {

}
