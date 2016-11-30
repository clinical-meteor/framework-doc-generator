import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { DDP } from 'meteor/ddp-client';
import { assert } from 'meteor/practicalmeteor:chai';
import { Promise } from 'meteor/promise';
import { $ } from 'meteor/jquery';

// if (Meteor.isClient) {
  describe('FHIR Resources exist on client', () => {
    it('Meteor exists on client', () =>  {
      assert.isObject(Meteor);
    });
    it('AllergyIntolerances', () =>  {
      assert.isObject(AllergyIntolerances);
    });
    it('Appointments', () =>  {
      assert.isObject(Appointments);
    });
    it('Binarys', () =>  {
      assert.isObject(Binarys);
    });
    it('Bundles', () =>  {
      assert.isObject(Bundles);
    });
    it('Careplans', () =>  {
      assert.isObject(Careplans);
    });
    it('ClinicalImpressions', () =>  {
      assert.isObject(ClinicalImpressions);
    });
    it('Conditions', () =>  {
      assert.isObject(Conditions);
    });
    it('Coverages', () =>  {
      assert.isObject(Coverages);
    });
    it('Datatypes', () =>  {
      assert.isObject(Datatypes);
    });
    it('Devices', () =>  {
      assert.isObject(Devices);
    });
    it('DiagnosticOrders', () =>  {
      assert.isObject(DiagnosticOrders);
    });
    it('DiagnosticReports', () =>  {
      assert.isObject(DiagnosticReports);
    });
    it('DocumentReferences', () =>  {
      assert.isObject(DocumentReferences);
    });
    it('Encounters', () =>  {
      assert.isObject(Encounters);
    });
    it('FamilyMemberHistories', () =>  {
      assert.isObject(FamilyMemberHistories);
    });
    it('Goals', () =>  {
      assert.isObject(Goals);
    });
    it('HealthcareServices', () =>  {
      assert.isObject(HealthcareServices);
    });
    it('ImagingStudies', () =>  {
      assert.isObject(ImagingStudies);
    });
    it('Immunizations', () =>  {
      assert.isObject(Immunizations);
    });
    it('Locations', () =>  {
      assert.isObject(Locations);
    });
    it('Medications', () =>  {
      assert.isObject(Medications);
    });
    it('MedicationOrders', () =>  {
      assert.isObject(MedicationOrders);
    });
    it('MedicationStatements', () =>  {
      assert.isObject(MedicationStatements);
    });
    it('MessageHeaders', () =>  {
      assert.isObject(MessageHeaders);
    });
    it('Observations', () =>  {
      assert.isObject(Observations);
    });
    it('Orders', () =>  {
      assert.isObject(Orders);
    });
    it('Organizations', () =>  {
      assert.isObject(Organizations);
    });
    it('Patients', () =>  {
      assert.isObject(Patients);
    });
    it('Practitioners', () =>  {
      assert.isObject(Practitioners);
    });
    it('Procedures', () =>  {
      assert.isObject(Procedures);
    });
    it('ProcedureRequests', () =>  {
      assert.isObject(ProcedureRequests);
    });
    it('Questionnaires', () =>  {
      assert.isObject(Questionnaires);
    });
    it('QuestionnaireResponses', () =>  {
      assert.isObject(QuestionnaireResponses);
    });
    it('RelatedPersons', () =>  {
      assert.isObject(RelatedPersons);
    });
    it('RiskAssessments', () =>  {
      assert.isObject(RiskAssessments);
    });
    it('Schedules', () =>  {
      assert.isObject(Schedules);
    });
    it('Sequences', () =>  {
      assert.isObject(Sequences);
    });
    it('Slots', () =>  {
      assert.isObject(Slots);
    });
    it('Specimens', () =>  {
      assert.isObject(Specimens);
    });
  });
//}
// if (Meteor.isServer) {
//   describe('FHIR Resources exists on server', () => {
//     it('Meteor exists on server', () => {
//       assert.isObject(Meteor);
//     });
//   });
// }


// AllergyIntolerances
// Appointments
// Binarys
// Bundles
// Careplans
// ClinicalImpressions
// Conditions
// Coverages
// Datatypes
// Devices
// DiagnosticOrders
// DiagnosticReports
// DocumentReferences
// Encounters
// FamilyMemberHistories
// Goals
// HealthcareServices
// ImagingStudies
// Immunizations
// Locations
// Medications
// MedicationOrders
// MedicationStatements
// MessageHeaders
// Observations
// Orders
// Organizations
// Patients
// Practitioners
// Procedures
// ProcedureRequests
// Questionnaires
// QuestionnaireResponses
// RelatedPersons
// RiskAssessments
// Schedules
// Sequences
// Slots
// Specimens
//
