# RiseHer Database Architecture Blueprint

This document acts as a deployment blueprint for the migration from mock client-side database engines (`localStorage` and `mock-data.js`) to MongoDB Atlas and Cloudinary media buckets.

---

## 1. MongoDB Schema Design

The application will operate on nine core collections. Below are their schema specifications, data types, index suggestions, and relations.

### A. Collection: `users`
Represents the credentials and platform identities.
- **Fields**:
  - `_id`: `ObjectId` (Primary Key)
  - `email`: `String` (Unique Index, Lowercase)
  - `passwordHash`: `String` (Bcrypt encrypted hash)
  - `role`: `String` (`"professional"`, `"customer"`, or `"admin"`)
  - `createdAt`: `Date`
  - `updatedAt`: `Date`

### B. Collection: `profiles`
Hosts demographic details and verification metrics.
- **Fields**:
  - `_id`: `ObjectId` (Primary Key)
  - `userId`: `ObjectId` (Index, Reference to `users._id`)
  - `name`: `String`
  - `businessName`: `String` (Optional, professional only)
  - `title`: `String` (Professional title)
  - `avatarUrl`: `String` (Cloudinary URL)
  - `phone`: `String`
  - `bio`: `String`
  - `location`: `String` (Structured city, state)
  - `specializationTags`: `Array` of `String`
  - `completionScore`: `Number` (Percentage completion tracker)
  - `verified`: `Boolean` (Administrator verified stamp)
  - `availableTimings`: `String` (e.g., `"Mon - Sat: 9:00 AM - 7:00 PM"`)
  - `serviceRadius`: `String` (e.g., `"5 km"`)
  - `languages`: `Array` of `String`
  - `verificationDocs`: `Object`
    - `aadharUrl`: `String` (Cloudinary secure PDF/Image URL)
    - `certificateUrl`: `String`
    - `status`: `String` (`"Pending"`, `"Approved"`, `"Rejected"`)

### C. Collection: `services`
Catalog of professional offers.
- **Fields**:
  - `_id`: `ObjectId` (Primary Key)
  - `userId`: `ObjectId` (Index, Reference to `users._id` / profile owner)
  - `name`: `String`
  - `category`: `String` (Tailoring, Beautician, Embroidery, Cooking, etc.)
  - `price`: `Number`
  - `duration`: `String` (e.g. `"3 days"`, `"2 hours"`)
  - `status`: `String` (`"Active"`, `"Inactive"`, `"Draft"`)
  - `description`: `String`

### D. Collection: `portfolio`
Showcases projects completed.
- **Fields**:
  - `_id`: `ObjectId` (Primary Key)
  - `userId`: `ObjectId` (Index, Reference to `users._id`)
  - `title`: `String`
  - `category`: `String`
  - `imageUrl`: `String` (Cloudinary CDN URL)
  - `views`: `Number`
  - `clicks`: `Number`
  - `saves`: `Number`
  - `createdAt`: `Date`

### E. Collection: `bookings`
Coordinates transactions and appointments.
- **Fields**:
  - `_id`: `ObjectId` (Primary Key, mapped to custom invoice reference like `RH-xxxxx`)
  - `customerId`: `ObjectId` (Reference to customer `users._id`)
  - `professionalId`: `ObjectId` (Reference to professional `users._id`)
  - `serviceName`: `String`
  - `price`: `Number`
  - `date`: `String` (e.g. `"28 Jun, 2026"`)
  - `time`: `String` (e.g. `"10:00 AM"`)
  - `duration`: `String`
  - `status`: `String` (`"Pending"`, `"Confirmed"`, `"In Progress"`, `"Completed"`, `"Cancelled"`, `"Rejected"`)
  - `paymentStatus`: `String` (`"Unpaid"`, `"Partial Paid"`, `"Fully Paid"`)
  - `paymentMethod`: `String` (e.g., `"UPI - PhonePe"`)
  - `notes`: `String`
  - `location`: `String`

### F. Collection: `reviews`
Tracks user reviews and feedback.
- **Fields**:
  - `_id`: `ObjectId` (Primary Key)
  - `bookingId`: `ObjectId` (Reference to `bookings._id`)
  - `professionalId`: `ObjectId` (Reference to professional `users._id`)
  - `customerName`: `String`
  - `rating`: `Number` (Range: 1.0 - 5.0)
  - `date`: `Date`
  - `text`: `String`
  - `avatarUrl`: `String`
  - `replies`: `Array` of `Object`
    - `text`: `String`
    - `date`: `Date`

### G. Collection: `messages`
Underpins communication between providers and clients.
- **Fields**:
  - `_id`: `ObjectId` (Primary Key)
  - `conversationId`: `String` (e.g. `"proId_custId"`)
  - `senderId`: `ObjectId` (Reference to `users._id`)
  - `receiverId`: `ObjectId` (Reference to `users._id`)
  - `text`: `String`
  - `attachments`: `Array` of `Object`
    - `fileUrl`: `String` (Cloudinary URL)
    - `fileType`: `String` (`"image"`, `"pdf"`)
  - `isRead`: `Boolean`
  - `createdAt`: `Date`

### H. Collection: `notifications`
Provides dynamic system alerts.
- **Fields**:
  - `_id`: `ObjectId` (Primary Key)
  - `userId`: `ObjectId` (Index, Reference to `users._id`)
  - `type`: `String` (`"booking"`, `"message"`, `"payment"`, `"system"`)
  - `title`: `String`
  - `message`: `String`
  - `link`: `String` (Deep link URL routing)
  - `isRead`: `Boolean`
  - `createdAt`: `Date`

### I. Collection: `earnings`
Tracks financials and payout history for professionals.
- **Fields**:
  - `_id`: `ObjectId` (Primary Key)
  - `userId`: `ObjectId` (Reference to professional `users._id`)
  - `availableBalance`: `Number`
  - `pendingBalance`: `Number`
  - `lastPayoutAmount`: `Number`
  - `lastPayoutDate`: `Date`
  - `bankDetails`: `Object`
    - `bankName`: `String`
    - `holderName`: `String`
    - `accountNumber`: `String` (Encrypted)
    - `ifscCode`: `String`
  - `payoutSettings`: `Object`
    - `autoPayout`: `Boolean`
    - `frequency`: `String` (`"Weekly"`, `"Monthly"`)
    - `minThreshold`: `Number`
  - `transactionHistory`: `Array` of `Object`
    - `date`: `Date`
    - `amount`: `Number`
    - `status`: `String` (`"Completed"`, `"Failed"`, `"Processing"`)
    - `type`: `String` (`"Withdrawal"`, `"Credit"`)
    - `reference`: `String`
    - `bank`: `String`

---

## 2. Cloudinary Bucket Structure

To separate media streams cleanly, media resources will target the following Cloudinary folder routes:

- **Customer & Professional Profiles**: `riseher/profile/`
- **Portfolio Deliverables & Photos**: `riseher/portfolio/`
- **Service Graphics / Thumbnails**: `riseher/services/`
- **Review Uploads**: `riseher/reviews/`
- **Chat Attachments (invoices, sheets, designs)**: `riseher/attachments/`
- **Aadhar / Certificates Verification Docs**: `riseher/verification/`
