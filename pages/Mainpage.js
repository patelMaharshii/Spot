import { StyleSheet, Text, View, Image, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

import indianFoodImg from '../assets/indian-food.png';
import pizzaImg from '../assets/pizza.jpg';
import shawarmaImg from '../assets/shawarma.png';

const { width } = Dimensions.get('window');

export default function App({ navigation }) {
    const [restaurants, setRestaurants ] = useState([
        {
            name: 'Indian Food',
            image: indianFoodImg,
            rating: 4.5,
            price: '$',
            distance: '1.5 km',
            hovered: false,
        },
        {
            name: 'Pizza',
            image: pizzaImg,
            rating: 4.0,
            price: '$$',
            distance: '2.0 km',
            hovered: false
        },
        {
            name: 'Shawarma',
            image: shawarmaImg,
            rating: 3.5,
            price: '$',
            distance: '2.5 km',
            hovered: false
        }
    ]);

    const handleHover = (index, hoverState) => {
        const updatedRestaurants = restaurants.map((restaurant, i) =>
            i === index ? { ...restaurant, hovered: hoverState } : restaurant
        );
        setRestaurants(updatedRestaurants);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Available Restaurants</Text>
                <View style={styles.iconContainer}>
                    <Icon 
                        name="user" 
                        size={Platform.OS === 'web' ? 48 : 36} 
                        color="#000" 
                        style={styles.icon} 
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        onClick={() => navigation.navigate('Profile')} 
                    />
                    <Icon 
                        name="cog" 
                        size={Platform.OS === 'web' ? 48 : 36} 
                        color="#000" 
                        style={styles.icon} 
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        onClick={() => navigation.navigate('Settings')} 
                    />
                </View>
            </View>
            <View style={styles.divider}/>
            <View style={styles.restaurantContainer}>
                {restaurants.map((restaurant, index) => (
                    <View 
                        key={index} 
                        style={[styles.card, restaurant.hovered && styles.cardHovered]}
                        onMouseEnter={() => handleHover(index, true)}
                        onMouseLeave={() => handleHover(index, false)}
                    >
                        <Image source={restaurant.image} style={styles.image} />
                        <Text style={styles.text}>{restaurant.name}</Text>
                        <View style={styles.ratingContainer}>
                            {[...Array(5)].map((_, i) => (
                                <Icon 
                                    key={i} 
                                    name="star" 
                                    size={Platform.OS === 'web' ? 32 : 24} 
                                    color={i < Math.floor(restaurant.rating) ? '#FFD700' : '#d3d3d3'}
                                    style={styles.star}
                                />
                            ))}
                        </View>
                        <Text style={styles.details}>{restaurant.rating} · {restaurant.price} · {restaurant.distance}</Text>
                    </View>
                ))}
            </View>
            <Text style={styles.comingSoon}>More Coming Soon...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: Platform.OS === 'web' ? 48 : 32,
        fontWeight: 'bold',
        marginVertical: 30,
        textAlign: 'center',
        flex: 1,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 20,
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
    },
    restaurantContainer: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    card: {
        width: '25%',
        backgroundColor: '#f8f8f8',
        padding: 40,
        margin: '1.66%',
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        shadowColor: '#000',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
    },
    cardHovered: {
        transform: [{ scale: 1.05 }],
        boxShadow: '0 0 20px #60b4d3',
        borderWidth: 2,
    },
    divider: {
        height: 3,
        backgroundColor: '#ccc',
        marginVertical: 10,
        width: '95%',
        alignSelf: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: 'cover',
    },
    text: {
        fontSize: Platform.OS === 'web' ? 36 : 28,
        marginTop: 15,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    details: {
        fontSize: Platform.OS === 'web' ? 28 : 20,
        color: '#555',
        marginTop: 10,
    },
    comingSoon: {
        fontSize: Platform.OS === 'web' ? 48 : 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
    },
});
