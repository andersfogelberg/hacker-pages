Meteor.subscribe('hackers');

Template.hackerList.helpers({
	Hackers(){
		let hackers = Hackers.find();
			return hackers;
	}
});
