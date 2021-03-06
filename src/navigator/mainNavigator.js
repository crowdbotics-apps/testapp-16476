import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings36246Navigator from '../features/Settings36246/navigator';
import UserProfile36239Navigator from '../features/UserProfile36239/navigator';
import Settings36238Navigator from '../features/Settings36238/navigator';
import Settings36236Navigator from '../features/Settings36236/navigator';
import SignIn236234Navigator from '../features/SignIn236234/navigator';
import UserProfile36215Navigator from '../features/UserProfile36215/navigator';
import Tutorial36214Navigator from '../features/Tutorial36214/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings36246: { screen: Settings36246Navigator },
UserProfile36239: { screen: UserProfile36239Navigator },
Settings36238: { screen: Settings36238Navigator },
Settings36236: { screen: Settings36236Navigator },
SignIn236234: { screen: SignIn236234Navigator },
UserProfile36215: { screen: UserProfile36215Navigator },
Tutorial36214: { screen: Tutorial36214Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
