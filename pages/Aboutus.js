import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AboutUs({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>About Us!</Text>
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

            {/* Content Section */}
            <ScrollView style={styles.contentSection}>
                <Text style={styles.contentText}>
                    Welcome to our About Us page! We are a dedicated team of developers passionate about providing high-quality reservation services. Our mission is to make the dining experience as efficient & enjoyable as possible for both the restaurant and customer.
                </Text>
                <Text style={styles.contentText}>
                    Thank you for choosing us. We look forward to serving you and building a lasting relationship with you. If you have any feedback for us, head over to our feedback page which is located on your profile page!
                </Text>
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
    divider: {
        height: 3,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    contentText: {
        fontSize: 18,
        lineHeight: 28,
        color: '#000',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
});
