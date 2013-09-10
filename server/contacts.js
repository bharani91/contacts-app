Meteor.publish("contacts", function(userId) {
	return Contacts.find({ userId: userId });
})