import { Component, OnInit } from '@angular/core';
import { SYMPTOMS } from '../symptoms.enum';

@Component({
  selector: 'app-symptoms-form',
  templateUrl: './symptoms-form.component.html',
  styleUrls: ['./symptoms-form.component.scss']
})
export class SymptomsFormComponent implements OnInit {

  SYMPTOMS = SYMPTOMS
  symptomKeys :string[]

  constructor() { }

  ngOnInit(): void {
    // initialize keys of symptoms enum
    let keys = Object.keys(SYMPTOMS)
    this.symptomKeys = keys.slice(keys.length / 2)
  }

  symptomToString(symptomCode) {
    switch (symptomCode) {
      case SYMPTOMS.ACHES:
      return "aches"
      case SYMPTOMS.DIARRHOEA:
      return "diarrhoea"
      case SYMPTOMS.DRY_COUGH:
      return "dry cough"
      case SYMPTOMS.FEVER:
      return "fever"
      case SYMPTOMS.NAUSEA:
      return "nausea"
      case SYMPTOMS.RUNNY_NOSE:
      return "runny nose"
      case SYMPTOMS.SHORTNESS_OF_BREATH:
      return "shortness of breath"
      case SYMPTOMS.SORE_THROAT:
      return "throat"
      case SYMPTOMS.TIREDNESS:
      return "tiredness"
    }
  }

}
