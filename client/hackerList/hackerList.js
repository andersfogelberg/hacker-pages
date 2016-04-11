Template.hackerList.onCreated(function (){
	Template.instance().subscribe('hackers');	
});


Template.hackerList.helpers({
	Hackers(){
		let hackers = Hackers.find();
			return hackers;
	}
});
