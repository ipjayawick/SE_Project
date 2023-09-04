import React from "react";
import { Form, Stack } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";

function UpcomingWeekSelect({ onDateSelect }) {
  const getUpcomingWeekDates = () => {
    const today = new Date();
    const daysInWeek = 7;
    const upcomingWeekDates = [];

    for (let i = 0; i < daysInWeek; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      upcomingWeekDates.push(date);
    }

    return upcomingWeekDates;
  };

  const handleDateChange = (event) => {
    const selectedValue = event.target.value;
    onDateSelect(selectedValue);
  };

  const upcomingWeekDates = getUpcomingWeekDates();

  return (
    <div>
      <Stack direction="horizontal">
        <FaCalendarAlt size={30} />
        <Form.Select
          aria-label="Select a Date"
          style={{ width: "180px", marginLeft: "10px" }}
          onChange={handleDateChange}
        >
          <option>Select a Date</option>
          {upcomingWeekDates.map((date, index) => (
            <option key={index} value={date.toISOString()}>
              {date.toDateString()}
            </option>
          ))}
        </Form.Select>
      </Stack>
    </div>
  );
}

export default UpcomingWeekSelect;
