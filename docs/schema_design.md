RSVP DB:
Name
Attending 
Not attending 
Maybe attending
Name of gift
Address
Email address


Gift Registry DB:
Gift name
Gift image URL
Price
Where to buy URL
Quantity Desired
Purchased Yes
Quantity Purchased


Create My Party DB:
First Name
Last Name
Event Date

Party
firstName - string
lastName - string
eventDate - date
rsvpDeadlineDate - date
organizerId - string
rsvpId - string
gifts - Gift []
guests - Guest []

Gift
giftName - string
giftImageUrl - string
price - decimal
giftLinkUrl - string
quantityDesired - int
quantityPurchased - int
giftPurchased - string

Guest
firstName - string
lastName - string
attendanceStatus - string
gift - lookup
address - string
email - string

