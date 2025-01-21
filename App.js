import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';

// Pages
import ProfilePage from './pages/Profile.js';
import SettingsPage from './pages/Settings.js';
import AboutUsPage from './pages/Aboutus.js';
import ReachOutPage from './pages/Reachout.js';
import AccountInfoPage from './pages/Accountinfo.js';
import BookingPage from './pages/Booking.js';
import SignInPage from './pages/Signin.js';
import SignUpPage from './pages/Signup.js';
import MainPage from './pages/Mainpage.js';

const { Navigator, Screen } = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigator
        initialRouteName="MainPage"
        screenOptions={{
          headerShown: false, // headerMode="none" is deprecated so don't use that
        }}
      >
        <Screen name="Profile" component={ProfilePage} />
        <Screen name="Settings" component={SettingsPage} />
        <Screen name="AboutUs" component={AboutUsPage} />
        <Screen name="ReachOut" component={ReachOutPage} />
        <Screen name="AccountInfo" component={AccountInfoPage} />
        <Screen name="Booking" component={BookingPage} />
        <Screen name="SignIn" component={SignInPage} />
        <Screen name="SignUp" component={SignUpPage} />
        <Screen name="MainPage" component={MainPage} />
      </Navigator>
    </NavigationContainer>
  );
};