import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationPageRoutingModule } from './education-routing.module';

import { EducationPage } from './education.page';
import { EducationalExperienciesModule } from "../../educational-experiencies/educational-experiencies.module";
import { MainComponentsModule } from "../../main-components/main-components.module";

@NgModule({
    declarations: [EducationPage],
    imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationPageRoutingModule,
    EducationalExperienciesModule,
    MainComponentsModule
]
})
export class EducationPageModule {}
