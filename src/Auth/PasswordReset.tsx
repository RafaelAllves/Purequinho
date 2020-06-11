import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import * as firebase from 'firebase';

export default class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useremail: '',
    };
  }

  handleForgotPassword = () => {
    var uEmail = this.state.useremail;
    firebase
      .auth()
      .sendPasswordResetEmail(uEmail)
      .then(function(user) {
        Alert.alert(
          'Redefinição de senha',
          'Um e-mail de redefinição de senha foi enviado para você...',
        );
      })
      .catch(function(e) {
        Alert.alert('E-mail invalido');
      });
  };

  handlePress = () => {
    this.handleForgotPassword();
    this.toggleModal();
  };

  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View style={{ flex: 5 }}>
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={this.toggleModal}>
          <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <Modal
          isVisible={this.state.isModalVisible}
          style={{ height: 90 }}
          onBackdropPress={() => this.toggleModal()}>
          <View
            style={styles.modal}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled">
            <View style={{ padding: 10 }}>
              <TouchableOpacity
                style={styles.closeModal} onPress={this.toggleModal}>
                <Text
                  style={{ fontSize: 15, fontFamily: 'System', color: 'rgba(0,0,0,0.3)' }}>
                  X
                </Text>
              </TouchableOpacity>

              <Text style={{ color: '#575757', fontSize: 16 }}>
                Redefinir senha
              </Text>
              <View style={styles.inputField}>
                <TextInput
                  style={styles.textInput}
                  placeholder={'Seu e-mail'}
                  keyboardType={'email-address'}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={useremail => this.setState({useremail})}
                />
              </View>
              <View style={{ marginTop: -10 }} />
              <Button
                title="ENVIAR E-MAIL"
                onPress={this.handlePress}
                color="#1F8DCD"
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    borderRadius: 5,
  },

  closeModal: {
    alignItems: 'center',
    alignContent: 'center',
    position: 'absolute',
    right: 10,
    top: 10,
    height: 20,
    width: 20,
    zIndex: 9,
  },

  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
    height: 50,
    marginBottom: 10,
  },

  textInput: {
    fontFamily: 'System',
    fontSize: 16,
    textAlignVertical: 'center',
    textAlign: 'left',
    marginTop: -4,
  },

  forgotPasswordButton: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 20,
    alignSelf: 'center',
    marginTop: 12,
  },

  forgotPasswordText: {
    paddingHorizontal: 15,
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    textDecorationLine: 'underline',
    textAlignVertical: 'center',
  },
});
