import firebase from "./firebase";
import moment from "moment";

var db = firebase.firestore();

const list = [
  {
    month: "January",
    days: [
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
    ],
  },
  {
    month: "February",
    days: [
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
    ],
  },
  {
    month: "March",
    days: [
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
    ],
  },
  {
    month: "April",
    days: [
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
    ],
  },
  {
    month: "May",
    days: [
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
    ],
  },
  {
    month: "June",
    days: [
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
    ],
  },
  {
    month: "July",
    days: [
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
    ],
  },
  {
    month: "August",
    days: [
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
    ],
  },
  {
    month: "September",
    days: [
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
    ],
  },
  {
    month: "October",
    days: [
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
    ],
  },
  {
    month: "November",
    days: [
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
    ],
  },
  {
    month: "December",
    days: [
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
    ],
  },
];

const timeSlots = [
  "07:00AM - 08:00AM",
  "08:00AM - 09:00AM",
  "09:00AM - 10:00AM",
  "10:00AM - 11:00AM",
  "11:00AM - 12:00AM",
  "12:00AM - 01:00PM",
  "01:00PM - 02:00PM",
  "02:00PM - 03:00PM",
];

function repeat(func, times) {
  func();
  times && --times && repeat(func, times);
}

const CreateMonth = () => {
  list.map((item) => {
    let month = item.month;
    item.days.map((item) => {
      db.collection(month).add({
        date: item,
      });
    });
    console.log(month);
    CreateVehicles(month);
  });
};

const CreateVehicles = (month) => {
  console.log(`${month} clicked`);
  db.collection(month)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(async function (doc) {
        for (let index = 1; index < 6; index++) {
          doc.ref
            .collection("vehicles")
            .add({
              vehicle_no: index,
            })
            .then(function (docRef) {
              timeSlots.forEach(async (item) => {
                docRef.collection("slots").add({
                  slot: item,
                  is_occupied: false,
                  occupant: " ",
                });
              });
            });
        }
      });
    });
};

const GetDates = async (month) => {
  let dates = [];
  await db
    .collection(month)
    .orderBy("date")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        dates.push({
          date: doc.data().date,
          doc_id: doc.id,
        });
      });
    });
  return dates;
};

const GetVehicles = async (month, doc_id) => {
  let result = [];
  await db
    .collection(month)
    .doc(doc_id)
    .collection("vehicles")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        result.push({
          vehicle_no: doc.data().vehicle_no,
          doc_id: doc.id,
        });
      });
    });
  return result;
};

const GetSlots = async (month, monDocID, vehicleDocID) => {
  let result = [];
  await db
    .collection(month)
    .doc(monDocID)
    .collection("vehicles")
    .doc(vehicleDocID)
    .collection("slots")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        result.push({
          doc_id: doc.id,
          is_occupied: doc.data().is_occupied,
          occupant: doc.data().occupant,
          slot: doc.data().slot,
        });
      });
    });
  return result;
};

const SetSlot = async (
  month,
  monDocID,
  vehicleDocID,
  slotDocID,
  employeeCode,
  employeeName
) => {
  await db
    .collection(month)
    .doc(monDocID)
    .collection("vehicles")
    .doc(vehicleDocID)
    .collection("slots")
    .doc(slotDocID)
    .update({
      is_occupied: true,
      occupant: employeeCode,
      occupant_name: employeeName,
    })
    .then(function () {
      console.log("Document successfully updated!");
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
};

const CreateMonths = (month, days) => {
  console.log(`CreateMonths function called for ${month}`);
  days.map(async (item) => {
    await db.collection(month).add({
      date: item,
    });
  });
  CreateVehicless(month);
};

const CreateVehicless = (month) => {
  console.log(`CreateVehicless function called for ${month}`);
  db.collection(month)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(async function (doc) {
        for (let index = 1; index < 6; index++) {
          await doc.ref
            .collection("vehicles")
            .add({
              vehicle_no: index,
            })
            .then(async function (vehicleDocRef) {
              for (let index = 0; index < timeSlots.length; index++) {
                await vehicleDocRef.collection("slots").add({
                  slot: timeSlots[index],
                  is_occupied: false,
                  occupant: " ",
                });
              }
            });
        }
      });
    })
    .then(function () {
      console.log("Operation Completed Successfully");
    });
};

const CreateSlots = (month) => {
  db.collection(month);
};

export {
  CreateMonth,
  CreateVehicles,
  GetDates,
  GetVehicles,
  GetSlots,
  SetSlot,
  CreateMonths,
  CreateVehicless,
  CreateSlots,
};

let slots = [
  {
    is_occupied: "",
    occupant: "",
    slot: "07:00AM - 08:00AM",
  },
  {
    is_occupied: "",
    occupant: "",
    slot: "08:00AM - 09:00AM",
  },
  {
    is_occupied: "",
    occupant: "",
    slot: "09:00AM - 10:00AM",
  },
  {
    is_occupied: "",
    occupant: "",
    slot: "10:00AM - 11:00AM",
  },
  {
    is_occupied: "",
    occupant: "",
    slot: "11:00AM - 12:00AM",
  },
  {
    is_occupied: "",
    occupant: "",
    slot: "12:00AM - 01:00PM",
  },
  {
    is_occupied: "",
    occupant: "",
    slot: "01:00PM - 02:00PM",
  },
  {
    is_occupied: "",
    occupant: "",
    slot: "02:00PM - 03:00PM",
  },
];

let vehicles = [
  {
    vehicle_no: 1,
    slots: slots,
  },
  {
    vehicle_no: 2,
    slots: slots,
  },
  {
    vehicle_no: 3,
    slots: slots,
  },
  {
    vehicle_no: 4,
    slots: slots,
  },
  {
    vehicle_no: 5,
    slots: slots,
  },
];

let days = [
  {
    date: 1,
    vehicles: vehicles,
  },
  {
    date: 2,
    vehicles: vehicles,
  },
  {
    date: 3,
    vehicles: vehicles,
  },
  {
    date: 4,
    vehicles: vehicles,
  },
  {
    date: 5,
    vehicles: vehicles,
  },
  {
    date: 6,
    vehicles: vehicles,
  },
  {
    date: 7,
    vehicles: vehicles,
  },
  {
    date: 8,
    vehicles: vehicles,
  },
  {
    date: 9,
    vehicles: vehicles,
  },
  {
    date: 10,
    vehicles: vehicles,
  },
  {
    date: 11,
    vehicles: vehicles,
  },
  {
    date: 12,
    vehicles: vehicles,
  },
  {
    date: 13,
    vehicles: vehicles,
  },
  {
    date: 14,
    vehicles: vehicles,
  },
  {
    date: 15,
    vehicles: vehicles,
  },
  {
    date: 16,
    vehicles: vehicles,
  },
  {
    date: 17,
    vehicles: vehicles,
  },
  {
    date: 18,
    vehicles: vehicles,
  },
  {
    date: 19,
    vehicles: vehicles,
  },
  {
    date: 20,
    vehicles: vehicles,
  },
  {
    date: 21,
    vehicles: vehicles,
  },
  {
    date: 22,
    vehicles: vehicles,
  },
  {
    date: 23,
    vehicles: vehicles,
  },
  {
    date: 24,
    vehicles: vehicles,
  },
  {
    date: 25,
    vehicles: vehicles,
  },
  {
    date: 26,
    vehicles: vehicles,
  },
  {
    date: 27,
    vehicles: vehicles,
  },
  {
    date: 28,
    vehicles: vehicles,
  },
  {
    date: 29,
    vehicles: vehicles,
  },
  {
    date: 30,
    vehicles: vehicles,
  },
  {
    date: 31,
    vehicles: vehicles,
  },
];
