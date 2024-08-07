import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CvPage } from './cv.page';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { Tab1PageRoutingModule } from './cv-routing.module';
import { PersonalDataModule } from '../personal-data/personal-data.module';
import { WorkingExperienciesModule } from "../working-experiencies/working-experiencies.module";
import { EducationalExperienciesModule } from "../educational-experiencies/educational-experiencies.module";
import { MainComponentsModule } from "../main-components/main-components.module";

@NgModule({
    declarations: [CvPage],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        Tab1PageRoutingModule,
        PersonalDataModule,
        WorkingExperienciesModule,
        EducationalExperienciesModule,
        MainComponentsModule,
        MatMenuModule,
        MatButtonModule
        
    ]
})
export class Tab1PageModule {}
