import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('HazardReports.db');

const SavedHazardReports = () => {
  const [hazardReports, setHazardReports] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM HazardReport;',
        [],
        (_, { rows: { _array } }) => setHazardReports(_array),
        (_, error) => console.log('Report fetch error', error)
      );
    });
  };

  const deleteReport = (id) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM HazardReport WHERE id = ?;',
        [id],
        () =>{
           fetchReports()
           Alert.alert(
            "Report deleted",
            `Report # ${id} has been deleted`,
            [
              {
                text: "OK",
                onPress: () => {
                },
              },
            ]
          );
        },
        (_, error) => console.log('Report delete error', error)
      );
    });
  };

  if (!hazardReports.length) {
    return (
      <View style={styles.centered}>
        <Text>No report available. Please add a report.</Text>
        <Button title="Go Back" onPress={() => navigation.navigate('MainScreen')} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={hazardReports}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>Report Type: {item.ReportType}</Text>
                <Text>Start Time: {item.StartTime}</Text>
                <Text>End Time: {item.EndTime}</Text>
                <Text>Latitude: {item.Lat}</Text>
                <Text>Longitude: {item.Long}</Text>
                <Text>Accuracy: {item.Accuracy}</Text>
                <Text>Notes: {item.Notes}</Text>
                <TouchableOpacity onPress={() => deleteReport(item.id)}>
                  <Text style={styles.deleteButton}>Delete Report</Text>
                </TouchableOpacity>
              </View>
              {item.Picture && <Image source={{ uri: item.Picture }} style={styles.image} />}
            </View>
          </View>
        )}
      />
    </View>
  );
};


  // ...existing styles...


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 30,
  },
  card: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: '#fff',
    marginVertical: 6,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 10,
  },
  textContainer: {
    flex: 3,
    paddingRight: 10,
  },
  image: {
    flex: 1,
    width: null,
    height: 100,
    borderRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    marginTop: 10,
    color: 'red',
    backgroundColor: 'pink',
    padding: 10,
  },

});

export default SavedHazardReports;