Template.hackerList.onCreated(function (){
	Meteor.subscribe('hackers');	
});


Template.hackerList.helpers({
	Hackers(){
		let hackers = Hackers.find();
			return hackers;
	},
	createdByUser(){
		return this.createdBy === Meteor.userId();
	}
});
