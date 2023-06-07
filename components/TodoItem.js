import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TodoItem = ({ item, toggleTodo }) => {
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => toggleTodo(item.id)}
        >
            <View style={styles.itemLeft}>
                {item.completed ? (
                    <AntDesign
                        name="checkcircle"
                        size={24}
                        color="#7F56D9"
                        backgroundColor="#FFFFFF"
                        style={styles.checkbox}
                    />
                ) : (
                    <View style={styles.emptyCheckbox} />
                )}
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#F9F9FB',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    emptyCheckbox: {
        width: 24,
        height: 24,
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#98A2B3',
        marginRight: 16,
    },
    checkbox: {
        marginRight: 15,
        borderRadius: 100,
    },
    itemText: {
        fontSize: 16,
    },
});

export default TodoItem;
