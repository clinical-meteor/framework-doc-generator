describe('FHIR Resources should exist on the client', function () {
  var server = meteor();
  var client = browser(server);

  it('AllergyIntolerances', function () {
    return client.execute(function () {
      expect(AllergyIntolerances).to.exist;
    });
  });

  it('AllergyIntolerances', function () {
    return client.execute(function () {
      expect(Appointments).to.exist;
    });
  });

  it('Binarys', function () {
    return client.execute(function () {
      expect(Binarys).to.exist;
    });
  });

  it('Bundles', function () {
    return client.execute(function () {
      expect(Bundles).to.exist;
    });
  });

  it('Careplans', function () {
    return client.execute(function () {
      expect(Careplans).to.exist;
    });
  });

  it('ClinicalImpressions', function () {
    return client.execute(function () {
      expect(ClinicalImpressions).to.exist;
    });
  });

  it('Conditions', function () {
    return client.execute(function () {
      expect(Conditions).to.exist;
    });
  });

  it('Coverages', function () {
    return client.execute(function () {
      expect(Coverages).to.exist;
    });
  });

  it('Datatypes', function () {
    return client.execute(function () {
      expect(Datatypes).to.exist;
    });
  });

  it('Devices', function () {
    return client.execute(function () {
      expect(Devices).to.exist;
    });
  });

  it('DiagnosticOrders', function () {
    return client.execute(function () {
      expect(DiagnosticOrders).to.exist;
    });
  });

  it('DiagnosticReports', function () {
    return client.execute(function () {
      expect(DiagnosticReports).to.exist;
    });
  });

  it('DocumentReferences', function () {
    return client.execute(function () {
      expect(DocumentReferences).to.exist;
    });
  });

  it('Encounters', function () {
    return client.execute(function () {
      expect(Encounters).to.exist;
    });
  });

  it('FamilyMemberHistories', function () {
    return client.execute(function () {
      expect(FamilyMemberHistories).to.exist;
    });
  });

  it('Goals', function () {
    return client.execute(function () {
      expect(Goals).to.exist;
    });
  });

  it('HealthcareServices', function () {
    return client.execute(function () {
      expect(HealthcareServices).to.exist;
    });
  });

  it('ImagingStudies', function () {
    return client.execute(function () {
      expect(ImagingStudies).to.exist;
    });
  });

  it('Immunizations', function () {
    return client.execute(function () {
      expect(Immunizations).to.exist;
    });
  });

  it('Locations', function () {
    return client.execute(function () {
      expect(Locations).to.exist;
    });
  });

  it('Medications', function () {
    return client.execute(function () {
      expect(Medications).to.exist;
    });
  });

  it('MedicationOrders', function () {
    return client.execute(function () {
      expect(MedicationOrders).to.exist;
    });
  });

  it('MedicationStatements', function () {
    return client.execute(function () {
      expect(MedicationStatements).to.exist;
    });
  });

  it('MessageHeaders', function () {
    return client.execute(function () {
      expect(MessageHeaders).to.exist;
    });
  });

  it('Observations', function () {
    return client.execute(function () {
      expect(Observations).to.exist;
    });
  });

  it('Orders', function () {
    return client.execute(function () {
      expect(Orders).to.exist;
    });
  });

  it('Organizations', function () {
    return client.execute(function () {
      expect(Organizations).to.exist;
    });
  });

  it('Patients', function () {
    return client.execute(function () {
      expect(Patients).to.exist;
    });
  });

  it('Practitioners', function () {
    return client.execute(function () {
      expect(Practitioners).to.exist;
    });
  });

  it('Procedures', function () {
    return client.execute(function () {
      expect(Procedures).to.exist;
    });
  });

  it('ProcedureRequests', function () {
    return client.execute(function () {
      expect(ProcedureRequests).to.exist;
    });
  });

  it('Questionnaires', function () {
    return client.execute(function () {
      expect(Questionnaires).to.exist;
    });
  });

  it('QuestionnaireResponses', function () {
    return client.execute(function () {
      expect(QuestionnaireResponses).to.exist;
    });
  });

  it('RelatedPersons', function () {
    return client.execute(function () {
      expect(RelatedPersons).to.exist;
    });
  });

  it('RiskAssessments', function () {
    return client.execute(function () {
      expect(RiskAssessments).to.exist;
    });
  });

  it('Schedules', function () {
    return client.execute(function () {
      expect(Schedules).to.exist;
    });
  });

  it('Sequences', function () {
    return client.execute(function () {
      expect(Sequences).to.exist;
    });
  });

  it('Slots', function () {
    return client.execute(function () {
      expect(Slots).to.exist;
    });
  });

  it('Specimens', function () {
    return client.execute(function () {
      expect(Specimens).to.exist;
    });
  });
});



describe('FHIR Resources should exist on the server', function () {
  var server = meteor();
  var client = browser(server);

  it('AllergyIntolerances', function () {
    return server.execute(function () {
      expect(AllergyIntolerances).to.exist;
    });
  });

  it('AllergyIntolerances', function () {
    return server.execute(function () {
      expect(Appointments).to.exist;
    });
  });

  it('Binarys', function () {
    return server.execute(function () {
      expect(Binarys).to.exist;
    });
  });

  it('Bundles', function () {
    return server.execute(function () {
      expect(Bundles).to.exist;
    });
  });

  it('Careplans', function () {
    return server.execute(function () {
      expect(Careplans).to.exist;
    });
  });

  it('ClinicalImpressions', function () {
    return server.execute(function () {
      expect(ClinicalImpressions).to.exist;
    });
  });

  it('Conditions', function () {
    return server.execute(function () {
      expect(Conditions).to.exist;
    });
  });

  it('Coverages', function () {
    return server.execute(function () {
      expect(Coverages).to.exist;
    });
  });

  it('Datatypes', function () {
    return server.execute(function () {
      expect(Datatypes).to.exist;
    });
  });

  it('Devices', function () {
    return server.execute(function () {
      expect(Devices).to.exist;
    });
  });

  it('DiagnosticOrders', function () {
    return server.execute(function () {
      expect(DiagnosticOrders).to.exist;
    });
  });

  it('DiagnosticReports', function () {
    return server.execute(function () {
      expect(DiagnosticReports).to.exist;
    });
  });

  it('DocumentReferences', function () {
    return server.execute(function () {
      expect(DocumentReferences).to.exist;
    });
  });

  it('Encounters', function () {
    return server.execute(function () {
      expect(Encounters).to.exist;
    });
  });

  it('FamilyMemberHistories', function () {
    return server.execute(function () {
      expect(FamilyMemberHistories).to.exist;
    });
  });

  it('Goals', function () {
    return server.execute(function () {
      expect(Goals).to.exist;
    });
  });

  it('HealthcareServices', function () {
    return server.execute(function () {
      expect(HealthcareServices).to.exist;
    });
  });

  it('ImagingStudies', function () {
    return server.execute(function () {
      expect(ImagingStudies).to.exist;
    });
  });

  it('Immunizations', function () {
    return server.execute(function () {
      expect(Immunizations).to.exist;
    });
  });

  it('Locations', function () {
    return server.execute(function () {
      expect(Locations).to.exist;
    });
  });

  it('Medications', function () {
    return server.execute(function () {
      expect(Medications).to.exist;
    });
  });

  it('MedicationOrders', function () {
    return server.execute(function () {
      expect(MedicationOrders).to.exist;
    });
  });

  it('MedicationStatements', function () {
    return server.execute(function () {
      expect(MedicationStatements).to.exist;
    });
  });

  it('MessageHeaders', function () {
    return server.execute(function () {
      expect(MessageHeaders).to.exist;
    });
  });

  it('Observations', function () {
    return server.execute(function () {
      expect(Observations).to.exist;
    });
  });

  it('Orders', function () {
    return server.execute(function () {
      expect(Orders).to.exist;
    });
  });

  it('Organizations', function () {
    return server.execute(function () {
      expect(Organizations).to.exist;
    });
  });

  it('Patients', function () {
    return server.execute(function () {
      expect(Patients).to.exist;
    });
  });

  it('Practitioners', function () {
    return server.execute(function () {
      expect(Practitioners).to.exist;
    });
  });

  it('Procedures', function () {
    return server.execute(function () {
      expect(Procedures).to.exist;
    });
  });

  it('ProcedureRequests', function () {
    return server.execute(function () {
      expect(ProcedureRequests).to.exist;
    });
  });

  it('Questionnaires', function () {
    return server.execute(function () {
      expect(Questionnaires).to.exist;
    });
  });

  it('QuestionnaireResponses', function () {
    return server.execute(function () {
      expect(QuestionnaireResponses).to.exist;
    });
  });

  it('RelatedPersons', function () {
    return server.execute(function () {
      expect(RelatedPersons).to.exist;
    });
  });

  it('RiskAssessments', function () {
    return server.execute(function () {
      expect(RiskAssessments).to.exist;
    });
  });

  it('Schedules', function () {
    return server.execute(function () {
      expect(Schedules).to.exist;
    });
  });

  it('Sequences', function () {
    return server.execute(function () {
      expect(Sequences).to.exist;
    });
  });

  it('Slots', function () {
    return server.execute(function () {
      expect(Slots).to.exist;
    });
  });

  it('Specimens', function () {
    return server.execute(function () {
      expect(Specimens).to.exist;
    });
  });
});
