import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default class GeneralInfoCard extends React.Component {
  state = {
    loading: true,
    error: null,
    pet: null,
  };

  componentDidMount() {
    this.fetchPetData();
  }

  async fetchPetData() {
    try {
      const response = await fetch('https://petpals-backend-5v3f.onrender.com/api/pets', {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsImlhdCI6MTc1MTI0Nzg5OCwiZXhwIjoxNzUxMjUxNDk4fQ.SnEJkpXZ4MD6sLUQnCroUIOakBOxqvsA5d_LztCERUc'
        }
      });

      const json = await response.json();

      if (json.success && json.data.length > 0) {
        this.setState({ pet: json.data[0], loading: false });
      } else {
        this.setState({ error: json.message, loading: false });
      }
    } catch (error) {
        console.log(error);
      this.setState({ error: 'Failed to fetch pet data', loading: false });
    }
  }

  render() {
    const { loading, error, pet } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>General Info</Text>

        <View style={styles.infoBox}>
          {loading ? (
            <ActivityIndicator />
          ) : error ? (
            <Text style={styles.text}>Error: {error}</Text>
          ) : (
            <>
              <Text style={styles.text}><Text style={styles.label}>Name:</Text> {pet.name}</Text>
              <Text style={styles.text}><Text style={styles.label}>Sex:</Text> {pet.sex}</Text>
              <Text style={styles.text}><Text style={styles.label}>Type:</Text> {pet.type}</Text>
              <Text style={styles.text}><Text style={styles.label}>Birthday:</Text> {new Date(pet.dateOfBirth).toLocaleDateString()}</Text>
            </>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Pacifico_400Regular',
    fontSize: 22,
    marginBottom: 4,
    backgroundColor: '#B9DC84',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  infoBox: {
    backgroundColor: '#E3AFC3',
    borderColor: 'black',
    borderWidth: 1,
    padding: 12,
    width: '90%',
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
  },
});
