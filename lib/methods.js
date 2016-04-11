Meteor.methods({insertHackers: function (newHackerObject){
		Hackers.insert(newHackerObject);
	}
});