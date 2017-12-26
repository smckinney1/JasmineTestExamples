describe('Address Book', function() {
	it('should be able to add a contact', function() {
		var addressBook = new AddressBook(),
			thisContact = new Contact();

		addressBook.addContact(thisContact);

		// If I were to get the first contact in my address book, addressBook.getContact(0)
		// should be the same as "thisContact."
		expect(addressBook.getContact(0)).toBe(thisContact);
	});

	it('should be able to delete a contact', function() {
		var addressBook = new AddressBook(),
			thisContact = new Contact();

		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);

		// Deleting the contact, then attempting to retrieve the contact, should
		// result in "undefined."
		expect(addressBook.getContact(0)).not.toBeDefined();
	});
});