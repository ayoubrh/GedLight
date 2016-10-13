'use strict';

/**
 * @ngdoc function
 * @name gedlightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gedlightApp
 */
angular.module('gedlightApp')
  .controller('MainCtrl', function ($scope,$log,$timeout) {




    $scope.ac = function(){
          return true;
        }

        $scope.treeData = [];

        $scope.treeConfig = {
            core : {
                error : function(error) {
                    $log.error('treeCtrl: error from js tree - ' + angular.toJson(error));
                },
                check_callback : true
            },
            types : {
                star : {
                    icon : 'glyphicon glyphicon-star'
                },
                cloud : {
                    icon : 'glyphicon glyphicon-cloud'
                }
            },
            plugins : ['types','state']
        };
        console.log($scope.treeConfig);

        $scope.readyCB = function(){

            $scope.treeData.push({ id : '1gbfffgb', type: 'cloud' , parent : '#', text : 'Node with children 1frff', children: true});
            // $scope.treeData.push({ id : '2', parent : '1gbfffgb', text : 'Node with children 2'});
            // $scope.treeData.push({ id : '3', parent : '1gbfffgb', text : 'Node with children 3'});
            $scope.treeData.push({ id : '4', type: 'cloud' ,parent : '#', text : 'Node with children 4', children: true});
            // $scope.treeData.push({ id : '5', parent : '4', text : 'Node with children 5'});
            // $scope.treeData.push({ id : '6', parent : '5', text : 'Node with children 6'});
        }

        $scope.before = function(item) {
          console.log(item);
            // var dataSuite = [
            //     { id: '3', parent: item.node.id, text: "Child 1" },
            //     { id: '4', parent: item.node.id, text: "Child 2" }
            // ];
            // console.debug(dataSuite);
            // angular.forEach(dataSuite, function (e) { this.push(e); }, $scope.treeData);
            //$timeout(function() {toaster.pop('success', 'Nodes Added', 'Added new node with the text ' + item.node.text)});
        };

        $scope.rename = function() {
          var node = $scope.treeInstance.jstree(true).get_selected();
          $scope.treeInstance.jstree(true).edit(node, null, function (node, status) {

              $scope.treeData[3].text = node.text;


          });
        }



        $scope.add = function(){
          console.log($scope.treeInstance.jstree(true).get_selected());

                //vm.treeData.push({ id : (newId++).toString(), parent : vm.treeData[0].id, text : 'Async Loaded' })
                $scope.treeData.push({ id : '8', parent : '1gbfffgb', text : 'Node ew'});
        }












    //
    //
    // $scope.treeEventsObj = {
    //   'ready': readyCB,
    //   'create_node': createNodeCB
    // }
    //
    // function readyCB() {
    //     $log.info('ready called');
    // };
    //
    // function createNodeCB(e,item) {
    //     $log.info('create_node called');
    // };
    //


    //test tree model 1
  // $scope.roleList1 = [
  //     { "roleName" : "User", "roleId" : "role1", "children" : [
  //       { "roleName" : "subUser1", "roleId" : "role11", "children" : [] },
  //       { "roleName" : "subUser2", "roleId" : "role12", "children" : [
  //         { "roleName" : "subUser2-1", "roleId" : "role121", "children" : [
  //           { "roleName" : "subUser2-1-1", "roleId" : "role1211", "children" : [] },
  //           { "roleName" : "subUser2-1-2", "roleId" : "role1212", "children" : [] }
  //         ]}
  //       ]}
  //     ]},
  //
  //     { "roleName" : "Admin", "roleId" : "role2", "children" : [] },
  //
  //     { "roleName" : "Guest", "roleId" : "role3", "children" : [] }
  //   ];
  //
  // //test tree model 2
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
