import React, { useState, useRef, useMemo } from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Swiper from 'react-native-swiper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

const { width } = Dimensions.get('window');

export default function Booking() {
    const swiper = useRef();
    const contentSwiper = useRef();
    const [week, setWeek] = useState(0);
  
    const [value, setValue] = useState(new Date());
  
    /**
     * Create an array of weekdays for the next two weeks starting from today.
     */
    const weeks = React.useMemo(() => {
      const start = moment().startOf('day'); // Start from today
  
      // Generate dates for today and the next 13 days (2 weeks)
      const dates = Array.from({ length: 14 }).map((_, index) =>
        moment(start).add(index, 'days').toDate()
      );
  
      // Split the dates into chunks of 7 (1 week per chunk)
      return [dates.slice(0, 7), dates.slice(7, 14)];
    }, []);
  
    /**
     * Create an array of days for the current day and its adjacent days.
     */
    const days = React.useMemo(() => {
      return [
        moment(value).subtract(1, 'day').toDate(),
        value,
        moment(value).add(1, 'day').toDate(),
      ];
    }, [value]);

    const handleConfirm = () => {
        return;
    };
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>

            {/* Title */}
          <View style={styles.header}>
            <Text style={styles.title}>Your Schedule</Text>
          </View>
  
            {/* 2-week picker  */}
          <View style={styles.picker}>
            <Swiper
              index={0}
              ref={swiper}
              loop={false}
              showsPagination={false}
              onIndexChanged={ind => {
                if (ind < 0 || ind >= weeks.length) {
                  return; // Prevent navigation outside the 2-week range
                }
  
                setWeek(ind);
              }}
            >
              {weeks.map((dates, index) => (
                <View style={styles.itemRow} key={index}>
                  {dates.map((item, dateIndex) => {
                    const isActive =
                      value.toDateString() === item.toDateString();
                    return (
                      <TouchableWithoutFeedback
                        key={dateIndex}
                        onPress={() => setValue(item)}
                      >
                        <View
                          style={[
                            styles.item,
                            isActive && {
                              backgroundColor: '#111',
                              borderColor: '#111',
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.itemWeekday,
                              isActive && { color: '#fff' },
                            ]}
                          >
                            {moment(item).format('ddd')}
                          </Text>
                          <Text
                            style={[
                              styles.itemDate,
                              isActive && { color: '#fff' },
                            ]}
                          >
                            {item.getDate()}
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    );
                  })}
                </View>
              ))}
            </Swiper>
          </View>
  
          <Swiper
            index={1}
            ref={contentSwiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={ind => {
              if (ind === 1) {
                return;
              }
  
              const nextValue = moment(value).add(ind - 2, 'days').toDate();
  
              setValue(nextValue);
              contentSwiper.current.scrollTo(1, false);
            }}
          >
            {days.map((day, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flex: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 24,
                  }}
                >
                  <Text style={styles.subtitle}>
                    {day.toLocaleDateString('en-US', { dateStyle: 'full' })}
                  </Text>
                  <View style={styles.placeholder}>
                    <View style={styles.placeholderInset}>
                      {/* Replace with your content */}
                    </View>
                  </View>
                </View>
              );
            })}
          </Swiper>
  
          <View style={styles.footer}>

            {/* Confirm Button */}
            <TouchableOpacity onPress={handleConfirm} style={styles.confirmBtn}>
                <Text style={styles.confirmBtnText}>Confirm</Text>
            </TouchableOpacity>

          </View>
        </View>
      </SafeAreaView>
    );
  }  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f9f9',
      paddingVertical: 20,
    },
    header: {
      paddingHorizontal: 16,
      marginBottom: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginVertical: 10,
    },
    picker: {
        height: 100, // Updated height to ensure visibility
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        alignContent: 'center',
        justifyContent: 'center',
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // Ensures proper vertical alignment
        paddingHorizontal: 8,
    },
    item: {
        flex: 1,
        minHeight: 80, // Updated to ensure proper size for Swiper items
        marginHorizontal: 6,
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemWeekday: {
      fontSize: 14,
      fontWeight: '600',
      color: '#555',
    },
    itemDate: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    content: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 30,
      backgroundColor: '#fff',
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginBottom: 20,
    },
    placeholder: {
      flex: 1,
      borderWidth: 2,
      borderColor: '#e3e3e3',
      borderStyle: 'dashed',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    placeholderInset: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      paddingHorizontal: 16,
      marginBottom: 20,
    },
    confirmBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#28a745',
    },
    confirmBtnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    },
  });
  