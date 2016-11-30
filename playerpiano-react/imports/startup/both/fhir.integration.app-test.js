import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { DDP } from 'meteor/ddp-client';
import { assert } from 'meteor/practicalmeteor:chai';
import { Promise } from 'meteor/promise';
import { $ } from 'meteor/jquery';

if (Meteor.isClient) {
  describe('Meteor exists on client', () => {
    it('Meteor exists on client', () =>  {
      assert.isObject(Meteor);
    });
  });
}
if (Meteor.isServer) {
  describe('Meteor exists on server', () => {
    it('Meteor exists on server', () => {
      assert.isObject(Meteor);
    });
  });
}
