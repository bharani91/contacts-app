Meteor.autosubscribe(function() {
	Meteor.subscribe("contacts", Meteor.userId());
})
