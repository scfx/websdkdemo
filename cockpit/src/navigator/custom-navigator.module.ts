import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule, HOOK_NAVIGATOR_NODES, NavigatorNode, OperationRealtimeService, PopoverConfirmComponent, TabsModule } from '@c8y/ngx-components';
import { CustomNavigatorComponent } from './custom-navigator.component';

const routes: Routes = [
    {
        path: 'custom_navigator',
        component: CustomNavigatorComponent
    }
];

@NgModule({
    declarations: [CustomNavigatorComponent],
    imports: [RouterModule.forChild(routes), CoreModule],
    entryComponents: [CustomNavigatorComponent],
    providers: [
        {
            provide: HOOK_NAVIGATOR_NODES,
            useValue: [{
                label: 'Custom Navigator',
                path: 'custom_navigator',
                icon: 'c8y-energy',
                priority: 1000
            }] as NavigatorNode[],
            multi: true
        }]
})

export class CustomNavigatorModule { }  