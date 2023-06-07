import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import TodoItem from './components/TodoItem.js';
import { Avatar } from 'react-native-elements';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now().toString(), text: newTodo, completed: false }]);
      setNewTodo('');
      setTaskDescription('');
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer1}>
      <TodoItem item={item} toggleTodo={toggleTodo} />
    </View>
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Task Details</Text>

        <View style={styles.taskDetails}>
          <Text style={styles.taskTitle}>Task Tittle</Text>

          <View style={styles.taskTitleContainer}>
            <TextInput
              style={styles.input}
              placeholder="Tittle Name"
              value={newTodo}
              onChangeText={(text) => setNewTodo(text)}
              onSubmitEditing={addTodo}
            />
          </View>

          <Text style={styles.descriptions}>Descriptions</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Task Description"
            value={taskDescription}
            onChangeText={(text) => setTaskDescription(text)}
            multiline
            numberOfLines={4}
            maxLength={500}
          />

          <View style={styles.avatargrp}>
            <Avatar rounded size={23} source={require('./Avatars/Avatar1.png')} resizeMode="cover" quality={100} />
            <Avatar rounded size={23} source={require('./Avatars/Avatar2.png')} resizeMode="cover" quality={100} />
            <Avatar rounded size={23} source={require('./Avatars/Avatar3.png')} resizeMode="cover" quality={100} />
            <Avatar rounded size={23} source={require('./Avatars/Avatar4.png')} resizeMode="cover" quality={100} />
          </View>

          <Text style={styles.taskTitle}>Task List</Text>
          {todos.length > 0 && (
            <TouchableOpacity style={styles.deleteButton} onPress={deleteAllTodos}>
              <AntDesign name="delete" size={17} color="#F30000" />
            </TouchableOpacity>
          )}
          <View style={styles.taskList}>
            <FlatList
              data={todos}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              style={styles.flatList}
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <AntDesign name="plus" size={24} color="#98A2B3" />
          <Text style={styles.taskContainer2}>
            Add task
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { // This is the container of the whole page
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 64,
    overflow: 'hidden',
  },
  content: { // This is the container of the content
    flex: 1,
  },
  sectionTitle: { // This is the title of the section
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 600,
  },
  taskDetails: {
    marginTop: 24,
  },
  taskTitle: { // This is the title of the task
    fontSize: 14,
    fontWeight: 500,
    color: '#5D6B98',
    marginBottom: 6,
  },
  taskTitleContainer: {
    // This is the container of the title
    marginBottom: 8,

  },
  input: { // This is the input for the title
    width: 320,
    height: 40,
    color: '#1D2939',
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  descriptions: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 500,
    color: '#5D6B98',
  },
  descriptionInput: { // This is the input for the description
    fontSize: 14,
    height: 100,
    borderColor: 'gray',
    fontWeight: 'bold',
    paddingTop: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 50,
    textAlignVertical: 'top',
  },
  avatargrp: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    top: 218,
    gap: -9,
    position: 'absolute',
  },
  taskList: {
    fontSize: 14,// This is the container of the FlatList
    marginBottom: 1,
    maxHeight: 240,
    borderColor: 'gray',
    marginTop: 10,
  },
  taskContainer1: { // This is the container of each task
    backgroundColor: '#F9F9FB',
    padding: 8,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  taskContainer2: { // This is the container of each task
    paddingTop: 23,
    paddingLeft: 13,
    backgroundColor: '#F9F9FB',
    color: '#98A2B3',
    height: 63,
    width: 290,
    left: 30,
    position: 'absolute',
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  deleteButton: {
    position: 'absolute',
    width: 60,
    height: 40,
    top: -15.25,
    bottom: 7.25,
    right: -12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 255,
    marginLeft: 288,
  },
  footer: {
    display: 'flex',
    width: 300,
    height: 85,
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    marginLeft: 15,
    marginBottom: 20,
    marginRight: 5,
    maxHeight: 290,
  },
  addButton: {
    position: 'absolute',
    left: -15,
    backgroundColor: '#F9F9FB',
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 40,
    height: 63,
    width: 290,
    borderRadius: 15,
  },
});