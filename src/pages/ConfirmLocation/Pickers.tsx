import React, {useState} from 'react';
import {View, Button, Platform, Text, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RectButton } from 'react-native-gesture-handler';


const Picker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event:any, selectedDate:any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode:any) => {
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
    <View style={styles.container}>
      <RectButton style={styles.button} onPress={showDatepicker}>
        <Text style={styles.buttonText}>
          Selecionar data
        </Text>
      </RectButton>
      <RectButton style={styles.button} onPress={showTimepicker}>
        <Text style={styles.buttonText}>
          Selecionar hora
        </Text>
      </RectButton>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
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

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  button: {
    height: 40,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText: {
    padding: 15,
    
  }

});

export default Picker;