import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ja";
import { ToolbarProps } from "react-big-calendar/index";

const localizer = momentLocalizer(moment);

type Props = {};

const RoomDetail = (props: Props) => {
  return (
    <div>
      <div>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          components={{ toolbar: (props) => <Toolbar {...props} /> }}
        />
      </div>
    </div>
  );
};

const Toolbar: React.FC<ToolbarProps> = ({ label, onNavigate }) => {
  return (
    <div>
      {label}
      <div>
        <button onClick={() => onNavigate("PREV")}>prev</button>
        <button onClick={() => onNavigate("NEXT")}>next</button>
      </div>
    </div>
  );
};
export default RoomDetail;
