import React, {useState} from 'react';
import {View, Button, Platform, TouchableOpacity, TextInput, Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function Picker(props) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    const listDate = `${currentDate}`.split(" ");
    props.setFunction('ScheduleMonth', listDate[1]);
    props.setFunction('ScheduleDay', listDate[2]);
    props.setFunction('ScheduleYear', listDate[3]);
    props.setFunction('ScheduleHour', listDate[4]);


  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Selecione a data" />

      </View>
      <View>
        <Button onPress={showTimepicker} title="Selecione a hora" />
      </View>
      {show && (
        <DateTimePicker
        testID="dateTimePicker"
        timeZoneOffsetInMinutes={0}
        value={date}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={onChange}
        />
        )}
    </View>
  );
};

export default Picker;