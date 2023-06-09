import React, { useState } from "react";
import View from "react-native";
import { Agenda } from "react-native-calendars";

const Schedule: React.FC = () => {
  const [items, setItems] = useState([]);
  return (
    <View>
      <Agenda />
    </View>
  );
};
export default Schedule;
