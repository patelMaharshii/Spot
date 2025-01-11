import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Settings({ navigation }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (optionId) => {
        if (optionId === 'aboutUs') {
            navigation.navigate('AboutUs'); // Navigate to the About Us page
        } else {
            setSelectedOption(buttonId);
            setTimeout(() => setTopButtonSelected(null), 500); // Reset after 500ms
        }
    };

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>Settings</Text>
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

            {/* Settings Options */}
            <ScrollView style={styles.optionsContainer}>
                {[
                    // { label: 'Notifications', icon: 'bell', id: 'notifications' },
                    // { label: 'Privacy', icon: 'lock', id: 'privacy' },
                    // { label: 'Language', icon: 'globe', id: 'language' },
                    // { label: 'Appearance', icon: 'paint-brush', id: 'appearance' },
                    { label: 'About Us', icon: 'info-circle', id: 'aboutUs' },
                ].map((option) => (
                    <TouchableOpacity
                        key={option.id}
                        style={[
                            styles.optionItem,
                            selectedOption === option.id && styles.optionSelected,
                        ]}
                        onPress={() => handleOptionClick(option.id)}
                    >
                        <Icon
                            name={option.icon}
                            size={20}
                            color={selectedOption === option.id ? '#60b4d3' : '#000'}
                            style={styles.optionIcon}
                        />
                        <Text
                            style={[
                                styles.optionText,
                                selectedOption === option.id && styles.optionTextSelected,
                            ]}
                        >
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
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
    optionsContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    optionItem: {
        backgroundColor: 'transparent',
        paddingVertical: 15,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionSelected: {
        backgroundColor: '#f0f8ff',
    },
    optionText: {
        fontSize: 18,
        color: '#333',
        marginLeft: 10,
    },
    optionTextSelected: {
        color: '#60b4d3',
    },
    optionIcon: {
        marginRight: 10,
    },
    divider: {
        height: 3,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
});
