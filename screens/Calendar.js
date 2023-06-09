import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Button } from "react-native";
import colors from "../constants/colors.js";
import Schedule from "../components/Schedule";

const CalendarScreen = () => {
  const queryClient = useQueryClient();
  const selected = queryClient.getQueryData("selected") || "";

  const handleDayPress = (day) => {
    queryClient.setQueryData("selected", day.dateString);
  };

  return (
    <>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
      <Button
        // onPress={onPressLearnMore}
        title="Posts"
        color={colors.primary}
        accessibilityLabel="Learn more about posts"
      />
      <Schedule />
    </>
  );
};

export default CalendarScreen;
