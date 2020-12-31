import firebase from "./firebase";
import moment from "moment";

var db = firebase.firestore();

var days31 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

var days30 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
];

var days28 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
];

const CreateMonths = (month, days) => {
  days.map((item) => {
    db.collection(month).add({
      date: item,
    });
  });
};

CreateMonths("January", days31);
// CreateMonths("February", days28);
// CreateMonths("March", days31);
// CreateMonths("April", days30);
// CreateMonths("May", days31);
// CreateMonths("June", days30);
// CreateMonths("July", days31);
// CreateMonths("August", days31);
// CreateMonths("September", days30);
// CreateMonths("October", days31);
// CreateMonths("November", days30);
// CreateMonths("December", days31);
