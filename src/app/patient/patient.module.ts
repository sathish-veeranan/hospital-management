import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientListComponent } from './list/patient.list.component';
import { PatientDetailsComponent } from './details/patient.details.component';
import { PatientReportComponent } from './report/patient.report.component';
import { PatientReportBasicInfoComponent } from './report/basic-info/basic-info.component';
import { PatientReportVisitComponent } from './report/visits/visits.component';
import { PatientCheckupComponent } from './checkup/patient.checkup.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [
    PatientComponent,
    PatientListComponent,
    PatientDetailsComponent,
    PatientReportComponent,
    PatientReportBasicInfoComponent,
    PatientReportVisitComponent,
    PatientCheckupComponent]
})

export class PatientModule { }

