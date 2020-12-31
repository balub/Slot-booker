import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";
import { useHistory } from "react-router-dom";
import moment from "moment";
const { Title } = Typography;

function DayCard({ data, month }) {
  let history = useHistory();
  const [isPast, setIsPast] = useState(false);

  var time = new Date();
  var selectedDate = new Date(time.getFullYear(), time.getMonth(), data.date);

  function handleClick() {
    history.push("/slots", { doc_data: data, month: month });
  }

  return (
    <Card.Grid
      style={{
        width: 150,
        borderRadius: 8,
        margin: 6,
      }}
      onClick={handleClick}
    >
      <Title level={3}>{data.date}</Title>
    </Card.Grid>
  );
}

export default DayCard;
