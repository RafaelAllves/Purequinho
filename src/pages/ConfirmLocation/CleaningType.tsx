import React, { useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const CleaningType = () => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.conteinerPickerSelect}>
        <View style={styles.pickerSelect}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            placeholder={{
              label: 'Quartos',
            }}
            items={[
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
            ]}
          />
        </View>
        <View style={styles.pickerSelect}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            placeholder={{
              label: 'Banheiros',
            }}
            items={[
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
            ]}
          />
        </View>
      </View>
      <View style={styles.pickerSelectType}>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          placeholder={{
            label: 'Tipo de faxina',
          }}
          items={[
            { label: 'Faxina Comum', value: '1' },
            { label: 'Pós Festa', value: '2' },
            { label: 'Pós Mudança', value: '3' },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    width: '90%',
    alignItems: 'center',
  },

  conteinerPickerSelect: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  pickerSelect: {
    width: '40%',
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
  },
  pickerSelectType: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    marginTop: 15,
  }
});

export default CleaningType;