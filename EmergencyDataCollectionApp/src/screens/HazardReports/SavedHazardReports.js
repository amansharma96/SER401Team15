import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Alert, TextInput, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import Button from '../../components/Button';
const db = SQLite.openDatabase('HazardReports.db');

const SavedHazardReports = () => {
  const [hazardReports, setHazardReports] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentReport, setCurrentReport] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Back" color="#000" onPress={() => navigation.navigate('MainScreen')} />
      ),
    });
    fetchReports();
  }, []);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Back" onPress={() => navigation.navigate('MainScreen')} />
      ),
    });
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
        fetchReports,
        (_, error) => console.log('Report delete error', error)
      );
    });
  };

  const updateReport = (id, field, value) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE HazardReport SET ${field} = ? WHERE id = ?;`,
        [value, id],
        fetchReports,
        (_, error) => console.log('Report update error', error)
      );
    });
  };

  const openEditModal = (report) => {
    setCurrentReport(report);
    setModalVisible(true);
  };


  const handleSave = () => {
    updateReport(currentReport.id, 'ReportType', currentReport.ReportType);
    updateReport(currentReport.id, 'StartTime', currentReport.StartTime);
    updateReport(currentReport.id, 'EndTime', currentReport.EndTime);
    updateReport(currentReport.id, 'Lat', currentReport.Lat);
    updateReport(currentReport.id, 'Long', currentReport.Long);
    updateReport(currentReport.id, 'Accuracy', currentReport.Accuracy);
    updateReport(currentReport.id, 'Notes', currentReport.Notes);
    setModalVisible(false);
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Report</Text>
            <TextInput
              style={styles.input}
              value={currentReport?.ReportType}
              onChangeText={(text) => setCurrentReport({ ...currentReport, ReportType: text })}
            />
            <TextInput
              style={styles.input}
              value={currentReport?.StartTime}
              onChangeText={(text) => setCurrentReport({ ...currentReport, StartTime: text })}
            />
            <TextInput
              style={styles.input}
              value={currentReport?.EndTime}
              onChangeText={(text) => setCurrentReport({ ...currentReport, EndTime: text })}
            />
            <TextInput
              style={styles.input}
              value={currentReport?.Lat.toString()}
              onChangeText={(text) => setCurrentReport({ ...currentReport, Lat: parseFloat(text) })}
            />
            <TextInput
              style={styles.input}
              value={currentReport?.Long.toString()}
              onChangeText={(text) => setCurrentReport({ ...currentReport, Long: parseFloat(text) })}
            />
            <TextInput
              style={styles.input}
              value={currentReport?.Accuracy.toString()}
              onChangeText={(text) => setCurrentReport({ ...currentReport, Accuracy: parseFloat(text) })}
            />
            <TextInput
              style={styles.input}
              value={currentReport?.Notes}
              onChangeText={(text) => setCurrentReport({ ...currentReport, Notes: text })}
            />
            <Button title="Save" onPress={handleSave} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    <FlatList
        data={hazardReports}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>Report # {item.id}</Text>
                <Text>Report Type: {item.ReportType}</Text>
                <Text>Start Time: {item.StartTime}</Text>
                <Text>End Time: {item.EndTime}</Text>
                <Text>Latitude: {item.Lat.toFixed(3)}</Text>
                <Text>Longitude: {item.Long.toFixed(3)}</Text>
                <Text>Accuracy: {item.Accuracy.toFixed(2)}</Text>
                <Text>Notes: {item.Notes}</Text>
                <TouchableOpacity onPress={() => deleteReport(item.id)}>
                  <Text style={styles.deleteButton}>Delete Report</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openEditModal(item)}>
                 <Text style={styles.editButton}>Edit Report</Text>
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    gap: 2,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
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
  editButton: {
    marginTop: 10,
    color: 'blue',
    backgroundColor: 'lightblue',
    padding: 10,
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    width : 200,
    textAlign : 'center'
  },
});

export default SavedHazardReports;