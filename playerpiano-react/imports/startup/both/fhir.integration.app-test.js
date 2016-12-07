import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { DDP } from 'meteor/ddp-client';
import { assert } from 'meteor/practicalmeteor:chai';
import { Promise } from 'meteor/promise';
import { $ } from 'meteor/jquery';




runIsomorphicTests = function(){
  it('Meteor exists on client', function()  {
    assert.isObject(Meteor);
  });
  it('AllergyIntolerances', function()  {
    assert.isObject(AllergyIntolerances);
  });
  it('Appointments', function()  {
    assert.isObject(Appointments);
  });
  it('Binarys', function()  {
    assert.isObject(Binarys);
  });
  it('Bundles', function()  {
    assert.isObject(Bundles);
  });
  it('CarePlans', function()  {
    assert.isObject(CarePlans);
  });
  it('ClinicalImpressions', function()  {
    assert.isObject(ClinicalImpressions);
  });
  it('Conditions', function()  {
    assert.isObject(Conditions);
  });
  it('Coverages', function()  {
    assert.isObject(Coverages);
  });
  it('Datatypes - Address', function()  {
    assert.isObject(Address);
  });
  it('Datatypes - Annotation', function()  {
    assert.isObject(Annotation);
  });
  it('Datatypes - Attachment', function()  {
    assert.isObject(Attachment);
  });
  it('Datatypes - Code', function()  {
    assert.isString(Code);
  });
  it('Datatypes - Quantity', function()  {
    assert.isObject(Quantity);
  });
  it('Datatypes - HumanName', function()  {
    assert.isObject(HumanName);
  });
  it('Datatypes - Reference', function()  {
    assert.isObject(Reference);
  });
  it('Datatypes - Period', function()  {
    assert.isObject(Period);
  });
  it('Datatypes - Coding', function()  {
    assert.isObject(Coding);
  });
  it('Datatypes - CodeableConcept', function()  {
    assert.isObject(CodeableConcept);
  });
  it('Datatypes - Identifier', function()  {
    assert.isObject(Identifier);
  });
  it('Datatypes - ContactPoint', function()  {
    assert.isObject(ContactPoint);
  });
  it('Datatypes - Group', function()  {
    assert.isObject(Group);
  });
  it('Datatypes - Conformance', function()  {
    assert.isObject(Conformance);
  });
  it('Datatypes - Range', function()  {
    assert.isObject(Range);
  });
  it('Datatypes - Ratio', function()  {
    assert.isObject(Ratio);
  });
  it('Datatypes - SampledData', function()  {
    assert.isObject(SampledData);
  });
  it('Datatypes - Signature', function()  {
    assert.isObject(Signature);
  });
  it('Datatypes - Timing', function()  {
    assert.isObject(Timing);
  });
  it('Devices', function()  {
    assert.isObject(Devices);
  });
  it('DiagnosticOrders', function()  {
    assert.isObject(DiagnosticOrders);
  });
  it('DiagnosticReports', function()  {
    assert.isObject(DiagnosticReports);
  });
  it('DocumentReferences', function()  {
    assert.isObject(DocumentReferences);
  });
  it('Encounters', function()  {
    assert.isObject(Encounters);
  });
  it('FamilyMemberHistories', function()  {
    assert.isObject(FamilyMemberHistories);
  });
  it('Goals', function()  {
    assert.isObject(Goals);
  });
  it('HealthcareServices', function()  {
    assert.isObject(HealthcareServices);
  });
  it('ImagingStudies', function()  {
    assert.isObject(ImagingStudies);
  });
  it('Immunizations', function()  {
    assert.isObject(Immunizations);
  });
  it('Locations', function()  {
    assert.isObject(Locations);
  });
  it('Medications', function()  {
    assert.isObject(Medications);
  });
  it('MedicationOrders', function()  {
    assert.isObject(MedicationOrders);
  });
  it('MedicationStatements', function()  {
    assert.isObject(MedicationStatements);
  });
  it('MessageHeaders', function()  {
    assert.isObject(MessageHeaders);
  });
  it('Observations', function()  {
    assert.isObject(Observations);
  });
  it('Orders', function()  {
    assert.isObject(Orders);
  });
  it('Organizations', function()  {
    assert.isObject(Organizations);
  });
  it('Patients', function()  {
    assert.isObject(Patients);
  });
  it('Persons', function()  {
    assert.isObject(Persons);
  });
  it('Practitioners', function()  {
    assert.isObject(Practitioners);
  });
  it('Procedures', function()  {
    assert.isObject(Procedures);
  });
  it('ProcedureRequests', function()  {
    assert.isObject(ProcedureRequests);
  });
  it('Questionnaires', function()  {
    assert.isObject(Questionnaires);
  });
  it('QuestionnaireResponses', function()  {
    assert.isObject(QuestionnaireResponses);
  });
  it('RelatedPersons', function()  {
    assert.isObject(RelatedPersons);
  });
  it('RiskAssessments', function()  {
    assert.isObject(RiskAssessments);
  });
  it('Schedules', function()  {
    assert.isObject(Schedules);
  });
  it('Sequences', function()  {
    assert.isObject(Sequences);
  });
  it('Slots', function()  {
    assert.isObject(Slots);
  });
  it('Specimens', function()  {
    assert.isObject(Specimens);
  });
}

if (Meteor.isClient) {
  describe('FHIR Resources exist on client', function() {
    runIsomorphicTests();
  });
}
if (Meteor.isServer) {
  describe('FHIR Resources exists on server', function() {
    runIsomorphicTests();
  });
}
