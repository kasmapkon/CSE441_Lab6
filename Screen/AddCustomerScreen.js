import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

const AddCustomerScreen = ({ authToken }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    console.log('AuthToken in AddCustomerScreen:', authToken);
  }, [authToken]);

  const handleAddCustomer = async () => {
    try {
      const newCustomer = {
        name: name,
        phone: phone,
      };
  
      console.log('Request Payload:', newCustomer);
  
      const response = await axios.post('https://kami-backend-5rs0.onrender.com/customers', newCustomer, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
  
      console.log('Response:', response.data);
  
      setName('');
      setPhone('');
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setName(text)}
        value={name}
      />

      <Text style={styles.label}>Phone:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPhone(text)}
        value={phone}
      />

      <Button title="Add Customer" onPress={handleAddCustomer} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    authToken: state.auth.authToken,
  };
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default connect(mapStateToProps)(AddCustomerScreen);
