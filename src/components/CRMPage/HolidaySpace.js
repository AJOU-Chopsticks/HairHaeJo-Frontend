import React from "react";
import styled from "styled-components";
import Holiday from "./Holiday";
import AddHoliday from "./AddHoliday";
import EditHoliday from "./EditHoliday";
import { useSelector } from "react-redux";
import CalendarList from "./CalendarList";

function HolidaySpace() {
  const { isOpenEditPopup } = useSelector((state) => state);
  return (
    <div>
      <div className="p-4 mb-8 md:ml-64">
        <CalendarList />;
      </div>
      <div className="p-4 mb-8 md:ml-64">
        <Title>CALENDAR</Title>
        <Holiday />;{/*<AddHoliday />;*/}
        {/*<EditHoliday />;*/}
      </div>
    </div>
  );
}

const Title = styled.div`
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
`;

export default HolidaySpace;
