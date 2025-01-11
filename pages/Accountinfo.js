import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';

export default function AccountInfo({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>Account Info</Text>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => navigation.goBack()}
                >
                    <View style={styles.closeButtonContainer}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Divider Line */}
            <View style={styles.divider} />

            {/* Information Display */}
            <View style={styles.infoContainer}>
                <Text style={styles.label}>First Name:</Text>
                <Text style={styles.placeholder}>John</Text>

                <Text style={styles.label}>Last Name:</Text>
                <Text style={styles.placeholder}>Doe</Text>

                <Text style={styles.label}>Email:</Text>
                <Text style={styles.placeholder}>example@gmail.com</Text>

                <Text style={styles.label}>Phone Number:</Text>
                <Text style={styles.placeholder}>(123) 456-7890</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    headerSection: {
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'ios' ? 70 : 40,
        paddingHorizontal: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000',
    },
    closeButton: {
        padding: 10,
    },
    closeButtonContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    divider: {
        height: 3,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    infoContainer: {
        paddingHorizontal: 20,
        marginTop: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    placeholder: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },
});
