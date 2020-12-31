import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Card, Modal, Input, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { GetSlots, SetSlot } from "../service";
import moment from "moment";

const { Title } = Typography;

function VehicleCard({ data, docData, month }) {
  const [slots, setSlots] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [slotData, setSlotData] = useState({
    doc_id: null,
    is_occupied: null,
    occupant: null,
    slot: null,
  });
  let history = useHistory();

  let name, code;

  useEffect(() => {
    async function fetchData() {
      let result = await GetSlots(month, docData.doc_id, data.doc_id);
      setSlots(result);
    }
    fetchData();
  }, []);

  const showModal = (data) => {
    setSlotData({
      doc_id: data.doc_id,
      is_occupied: data.is_occupied,
      occupant: data.occupant,
      slot: data.slot,
    });
    console.log(data);
    setIsModalVisible(true);
  };

  const BookingModal = () => {
    const [empName, setEmpName] = useState("");
    const [empCode, setEmpCode] = useState("");

    async function setSlot() {
      let result = await SetSlot(
        month,
        docData.doc_id,
        data.doc_id,
        slotData.doc_id,
        empCode,
        empName
      );
      history.push("/");
    }

    const handleOk = () => {
      setIsModalVisible(false);
      setSlot();
    };

    const handleCancel = () => {
      setIsModalVisible(false);
      setEmpCode("");
      setEmpName("");
    };

    const HandleNameChange = (e) => {
      e.preventDefault();
      setEmpName(e.target.value);
    };

    const HandleCodeChange = (e) => {
      e.preventDefault();
      setEmpCode(e.target.value);
    };
    return (
      <Modal
        title="Enter Employee Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Title level={5}>Enter Employee Name</Title>
        <Input
          placeholder="Enter Employee Name"
          size="large"
          prefix={<UserOutlined />}
          onChange={HandleNameChange}
        />
        <br />
        <br />
        <Title level={5}>Enter Employee Code</Title>
        <Input
          placeholder="Enter Employee Code"
          size="large"
          prefix={<UserOutlined />}
          value={empCode}
          onChange={HandleCodeChange}
        />
      </Modal>
    );
  };

  return (
    <Card title={`Vehicle Number ${data.vehicle_no}`} style={{ margin: 12 }}>
      {slots.map((item) => {
        return (
          <Card.Grid
            style={{
              width: "25%",
              textAlign: "center",
              backgroundColor: !item.is_occupied ? "#95de64" : "#ff7875",
            }}
            key={item.doc_id}
            onClick={
              !item.is_occupied
                ? () => showModal(item)
                : () => console.log(item)
            }
          >
            {item.slot}
          </Card.Grid>
        );
      })}
      <BookingModal />
    </Card>
  );
}

export default VehicleCard;
