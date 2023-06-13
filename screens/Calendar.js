import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Button } from "react-native";
import colors from "../constants/colors.js";
import Schedule from "../components/Schedule.tsx";

const CalendarScreen = () => {
  const queryClient = useQueryClient();
  //   const selected = queryClient.getQueryData("selected") || "";
  const [selectedDate, setSelectedDate] = useState(new Date());

  //   const handleDayPress = (day) => {
  //     queryClient.setQueryData("selected", day.dateString);
  //   };
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    // queryClient.setQueryData("selected", day.dateString);
  };

  const onPressLearnMore = () => {
    console.warn("Button pressed");
  };

  return (
    <>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
      <Button
        onPress={onPressLearnMore}
        title="Posts"
        color={colors.primary}
        accessibilityLabel="Learn more about posts"
      />
      <Schedule />
    </>
  );
};

export default CalendarScreen;
