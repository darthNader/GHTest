'use strict'

eventsApp.controller('EventController',
	function EventController($scope){
       $scope.event = {
       	name: 'Angular Boot Camp',
       	date: '1/1/2013',
       	time: '10:30 am',
       	location: {
       		address: 'Google Headquarters',
       		city: 'Mountain View',
       		province: 'CA'
       	},
       	imageUrl: '/img/angularjs-logo.png',
       	sessions: [
       		{
       			name: 'Directives Masterclass',
       			creatorName: 'Bob Smith',
       			duration: '1 hr',
       			level: 'Advanced',
       			abstract: 'In this session we will discuss directives',
       			upVoteCount: 0
       		},
       		{
       			name: 'Scopes for fun and profit',
       			reatorName: 'John Doe',
       			duration: '30 min',
       			level: 'Introductory',
       			abstract: 'In this session we will discuss scopes',
       			upVoteCount: 2
       		},
       		{
       			name: 'Well behaved Controllers',
       			reatorName: 'Jane Doe',
       			duration: '2 hr',
       			level: 'Intermediate',
       			abstract: 'In this session we will discuss controllers',
       			upVoteCount: 1
       		}
       	]
       }

       $scope.upVoteSession = function(session) {
       		session.upVoteCount++;
       };

       $scope.downVoteSession = function(session) {
       		session.upVoteCount--;
       };
	}

);