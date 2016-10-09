'use strict';

/**
 * @ngdoc function
 * @name gedlightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gedlightApp
 */
angular.module('gedlightApp')
  .controller('MainCtrl', function ($scope) {
    //test tree model 1
  $scope.roleList1 = [
      { "roleName" : "User", "roleId" : "role1", "children" : [
        { "roleName" : "subUser1", "roleId" : "role11", "children" : [] },
        { "roleName" : "subUser2", "roleId" : "role12", "children" : [
          { "roleName" : "subUser2-1", "roleId" : "role121", "children" : [
            { "roleName" : "subUser2-1-1", "roleId" : "role1211", "children" : [] },
            { "roleName" : "subUser2-1-2", "roleId" : "role1212", "children" : [] }
          ]}
        ]}
      ]},

      { "roleName" : "Admin", "roleId" : "role2", "children" : [] },

      { "roleName" : "Guest", "roleId" : "role3", "children" : [] }
    ];

  //test tree model 2
  $scope.roleList2 = [
      { "roleName" : "User", "first" : true, "roleId" : "role1", "children" : [
        { "roleName" : "subUser1", "first" : false,"roleId" : "role11", "collapsed" : true, "children" : [] },
        { "roleName" : "subUser2", "first" : false,"roleId" : "role12", "collapsed" : true, "children" : [
          { "roleName" : "subUser2-1", "first" : false,"roleId" : "role121", "children" : [
            { "roleName" : "subUser2-1-1", "first" : false,"roleId" : "role1211", "children" : [] },
            { "roleName" : "subUser2-1-2", "first" : false,"roleId" : "role1212", "children" : [] }
          ]}
        ]}
      ]},

      { "roleName" : "Admin", "first" : true,"roleId" : "role2", "children" : [
        { "roleName" : "subAdmin1", "first" : false,"roleId" : "role11", "collapsed" : true, "children" : [] },
        { "roleName" : "subAdmin2", "first" : false,"roleId" : "role12", "children" : [
          { "roleName" : "subAdmin2-1", "first" : false,"roleId" : "role121", "children" : [
            { "roleName" : "subAdmin2-1-1", "first" : false,"roleId" : "role1211", "children" : [] },
            { "roleName" : "subAdmin2-1-2", "first" : false,"roleId" : "role1212", "children" : [] }
          ]}
        ]}
      ]},

      { "roleName" : "Guest", "first" : true,"roleId" : "role3", "children" : [
        { "roleName" : "subGuest1", "first" : false,"roleId" : "role11", "children" : [] },
        { "roleName" : "subGuest2", "first" : false,"roleId" : "role12", "collapsed" : true, "children" : [
          { "roleName" : "subGuest2-1", "first" : false,"roleId" : "role121", "children" : [
            { "roleName" : "subGuest2-1-1", "first" : false,"roleId" : "role1211", "children" : [] },
            { "roleName" : "subGuest2-1-2", "first" : false, "roleId" : "role1212", "children" : [] }
          ]}
        ]}
      ]}
    ];
  });
