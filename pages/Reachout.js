import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import email from 'react-native-email';

export default function Reachout({ navigation }) {
    const [emailMessage, setEmailMessage] = useState('');
    const [emailSubject, setEmailSubject] = useState('');

    const handleSendEmail = () => {
        if (!emailMessage.trim() || !emailSubject.trim()) {
            Alert.alert('Error', 'Please fill in both the subject and message before sending.');
            return;
        }

        const recipient = 'maharshiip13@gmail.com';
        const options = {
            to: recipient,
            subject: emailSubject,
            body: emailMessage,
        };

        email(options).catch((err) => {
            console.error('Email sending failed', err);
            Alert.alert('Error', 'Failed to open email client. Please try again.');
        });
    };

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>Reach Out</Text>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => navigation.goBack()}
                >
                    <View style={styles.closeButtonContainer}>
                        <Icon name="close" size={20} color="#000" />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Divider Line */}
            <View style={styles.divider} />

            {/* Form Section */}
            <View style={styles.form}>
                <Text style={styles.label}>Subject:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter subject here"
                    value={emailSubject}
                    onChangeText={setEmailSubject}
                />

                <Text style={styles.label}>Message:</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Enter your message here"
                    value={emailMessage}
                    onChangeText={setEmailMessage}
                    multiline={true}
                />

                <TouchableOpacity style={styles.sendButton} onPress={handleSendEmail}>
                    <Text style={styles.sendButtonText}>Send Email</Text>
                </TouchableOpacity>
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
    divider: {
        height: 3,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    form: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 20,
    },
    textArea: {
        height: 120,
        textAlignVertical: 'top',
    },
    sendButton: {
        backgroundColor: '#60b4d3',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    sendButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});
