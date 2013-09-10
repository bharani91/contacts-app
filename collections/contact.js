Contacts = new Meteor.Collection("contacts");


Contacts.allow({
	insert: function(userId, doc) {
		return !!userId
	},

	update: function(userId, doc) {
		if(userId && doc.userId == userId) return true;
		return false;
	},
	
	remove: function(userId, doc) {
		if(userId && doc.userId == userId) return true;
		return false;
	}
})