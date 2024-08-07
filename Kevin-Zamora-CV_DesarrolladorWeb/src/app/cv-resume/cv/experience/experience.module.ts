import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperiencePageRoutingModule } from './experience-routing.module';

import { ExperiencePage } from './experience.page';
import { WorkingExperienciesModule } from "../../working-experiencies/working-experiencies.module";
import { MainComponentsModule } from "../../main-components/main-components.module";

@NgModule({
    declarations: [ExperiencePage],
    imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperiencePageRoutingModule,
    WorkingExperienciesModule,
    MainComponentsModule
]
})
export class ExperiencePageModule {}
