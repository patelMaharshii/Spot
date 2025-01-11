import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile({ navigation }) {
    const [topButtonSelected, setTopButtonSelected] = useState(null);
    const [bottomOptionSelected, setBottomOptionSelected] = useState(null);

    const handleTopButtonClick = (buttonId) => {
        if (buttonId === 'settings') {
            navigation.navigate('Settings'); // Navigate to Settings page
        }  else if (buttonId === 'reachOut') {
            navigation.navigate('ReachOut'); // Navigate to Reachout page
        } else {
            setTopButtonSelected(buttonId);
            setTimeout(() => setTopButtonSelected(null), 500); // Reset after 500ms
        }
    };

    const handleBottomButtonClick = (buttonId) => {
        if(buttonId === 'accountInfo') {
            navigation.navigate('AccountInfo');
        } else {
            setBottomOptionSelected(buttonId);
            setTimeout(() => setBottomOptionSelected(null), 500); // Reset after 500ms
        }
    };

    return (
        <View style={styles.container}>
            {/* Top Section */}
            <View style={styles.topSection}>
                <Text style={styles.greetingText}>Hello Name!</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, topButtonSelected === 'bookmarks' && styles.buttonSelected]}
                        onPress={() => handleTopButtonClick('bookmarks')}
                    >
                        <Icon name="bookmark" size={20} color={topButtonSelected === 'bookmarks' ? '#fff' : '#000'} />
                        <Text style={styles.buttonText}>Bookmarks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, topButtonSelected === 'settings' && styles.buttonSelected]}
                        onPress={() => handleTopButtonClick('settings')}
                    >
                        <Icon name="cogs" size={20} color={topButtonSelected === 'settings' ? '#fff' : '#000'} />
                        <Text style={styles.buttonText}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, topButtonSelected === 'reachOut' && styles.buttonSelected]}
                        onPress={() => handleTopButtonClick('reachOut')}
                    >
                        <Icon name="envelope" size={20} color={topButtonSelected === 'reachOut' ? '#fff' : '#000'} />
                        <Text style={styles.buttonText}>Reach Out</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Divider Line */}
            <View style={styles.divider} />

            {/* Bottom Section */}
            <ScrollView style={styles.optionsContainer}>
                {[
                    { label: 'Account Info', icon: 'user', id: 'accountInfo' },
                    // { label: 'Wallet', icon: 'usd', id: 'wallet' },
                    // { label: 'History', icon: 'history', id: 'history' },
                    // { label: 'FAQ', icon: 'question-circle', id: 'faq' },
                    // { label: 'Give Us Feedback', icon: 'comment', id: 'feedback' }
                ].map((option) => (
                    <TouchableOpacity
                        key={option.id}
                        style={[
                            styles.optionItem,
                            bottomOptionSelected === option.id && styles.optionSelected
                        ]}
                        onPress={() => handleBottomButtonClick(option.id)}
                    >
                        <Icon name={option.icon} size={20} color={bottomOptionSelected === option.id ? '#60b4d3' : '#000'} style={styles.optionIcon} />
                        <Text style={[styles.optionText, bottomOptionSelected === option.id && styles.optionTextSelected]}>
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
    topSection: {
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'ios' ? 70 : 40,
        paddingHorizontal: 20,
        paddingBottom: 20,
        position: 'relative',
    },
    greetingText: {
        color: '#000',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'left',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#d3d3d3',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonSelected: {
        backgroundColor: '#60b4d3',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5,
        textAlign: 'center',
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
    closeButton: {
        position: 'absolute',
        right: 20,
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
});
