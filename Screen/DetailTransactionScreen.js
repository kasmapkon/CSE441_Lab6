import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const DetailTransactionScreen = ({ route }) => {
  const { _id } = route.params;
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await axios.get(`https://kami-backend-5rs0.onrender.com/transactions/${_id}`);
        setTransaction(response.data);
      } catch (error) {
        console.error('Error fetching transaction:', error);
      }
    };

    fetchTransaction();
  }, [_id]);

  if (!transaction) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detail Transaction</Text>

      <View style={styles.serviceContainer}>
        <Text style={styles.label}>Transaction Code:</Text>
        <Text style={styles.value}>{transaction.id}</Text>
      

     
        <Text style={styles.label}>Customer:</Text>
        <Text style={styles.value}>{transaction.customer.name}</Text>
     

      
        <Text style={styles.label}>Creation Time:</Text>
        <Text style={styles.value}>{new Date(transaction.createdAt).toLocaleString()}</Text>
      </View>

      <View style={styles.serviceContainer}>
        <Text style={styles.label}>Services List:</Text>
        {transaction.services.map((service) => (
          <View key={service._id} style={styles.detailItem}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.servicePrice}>Price: {service.price}đ</Text>
            <Text style={styles.serviceQuantity}>Quantity: {service.quantity}</Text>
          </View>
        ))}
      </View>

      <View style={styles.serviceContainer}>
        <Text style={styles.label}>Total Cost:</Text>
        <Text style={styles.price}>{transaction.price}đ</Text>
      </View>
      <View style={styles.serviceContainer}>
        <Text style={styles.payment}>Total Payment:</Text>
        <Text style={styles.pricepayment}>{transaction.price}đ</Text>
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailItem: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  value: {
    fontSize: 14,
  },
  serviceContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  servicePrice: {
    fontSize: 12,
    color: 'red',
  },
  serviceQuantity: {
    fontSize: 12,
  },
  price:{
    fontSize: 12,
    color: 'red',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  payment:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  pricepayment:{
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
});

export default DetailTransactionScreen;
