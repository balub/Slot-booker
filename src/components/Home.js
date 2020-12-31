import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import {
  CreateMonth,
  GetDates,
  CreateVehicles,
  CreateMonths,
  CreateVehicless,
  CreateSlots,
} from "../service";
import DayCard from "./DayCard";
import { Typography, Row, Col, Button } from "antd";
import moment from "moment";

const { Title } = Typography;

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

var monthList = [
  // {
  //   month: "January",
  //   days: days31,
  // },
  // {
  //   month: "February",
  //   days: days28,
  // },
  // {
  //   month: "March",
  //   days: days31,
  // },
  // {
  //   month: "April",
  //   days: days30,
  // },
  {
    month: "May",
    days: days31,
  },
  // {
  //   month: "June",
  //   days: days30,
  // },
  {
    month: "July",
    days: days31,
  },
  {
    month: "August",
    days: days31,
  },
  {
    month: "September",
    days: days30,
  },
  {
    month: "October",
    days: days31,
  },
  {
    month: "November",
    days: days30,
  },
  {
    month: "December",
    days: days31,
  },
];

function Home() {
  const [dates, setDates] = useState([]);
  const [month, setMonth] = useState(new Date());

  const HandleClick = () => {
    // CreateMonths("January", days31);
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
  };

  useEffect(() => {
    async function fetchData() {
      let result = await GetDates(moment(month).format("MMMM"));
      setDates(result);
    }
    fetchData();
  }, [month]);

  return (
    <div
      style={{
        padding: 12,
        overflow: "hidden",
        marginLeft: 30,
      }}
    >
      {/* Do not uncomment the line below */}
      {/* <button onClick={HandleClick}>CLick me</button> */}
      <Title level={2}>{moment(month).format("MMMM YYYY")}</Title>

      <Button
        type="primary"
        size={"large"}
        onClick={() => setMonth(moment(month).add(1, "months").calendar())}
      >
        Next Month
      </Button>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {dates.map((item) => (
          <Col className="gutter-row">
            <DayCard data={item} month={moment(month).format("MMMM")} key={item.doc_id} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
