import React, { useEffect, useState } from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import { AppLoading } from "expo";
import './app/api/client';
import AuthContext from './app/auth/context';
import { getUserData } from './app/utility/storage';

//Always remember to include return in all functions after declaration

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      const userData = await getUserData();
      if (userData) {
        setUser(userData);
      }
    };

    loadUserData();
  }, []);

  

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <GestureHandlerRootView>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </GestureHandlerRootView>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// export default function App() {
//   const [user, setUser] = useState(null)

//     useEffect(()=>{

//       setUser(getUserData());

//     },[])
//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       <OfflineNotice />
//         <NavigationContainer theme={navigationTheme}>
//           <GestureHandlerRootView>
//              {user ? <AppNavigator /> : <AuthNavigator />}
//           </GestureHandlerRootView>
//         </NavigationContainer>
//       </AuthContext.Provider>
//   );
// }



// <Screen>
//   <ButtonComponent 
//     title='Select Image'
//     onPress={selectImage}
//   />
//   <Image 
//     source={{ uri: imageUri }} 
//     style={{ width: 200, height: 200 }}
//     />
// </Screen>




//const result =  await Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.LOCATION_BACKGROUND) //alternative permission request using permissions API

//console.log(Dimensions.get('screen'));

// <View
//   style={{
  //     backgroundColor: colors.grey,
  //     padding: 20,
  //     paddingTop: 100
  //   }}
  // >
  //   <CardComponent
  //     title='Red Jacket for sale'
  //     subTitle='$100'
  //     image={require('./app/assets/jacket.jpg')}
  //   />
  // </View>
  
  
  // <View
  //   style={{
    //     flex: 1, 
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //   }}
    // >
    //   <ButtonComponent title='Login' onPress={() => console.log('Login Button Tapped')}/>
    // </View>
    
    
    {/* <Text>{firstName}</Text>
    <TextInput
    //keyboardType='' - choose type of keyboard
    //secureTextEntry - type in passwords
    onChangeText={text => setFirstName(text)} 
    placeholder='First Name'
    style={{
      borderBottomColor: '#ccc',
      borderWidth: 5,
      marginVertical: 10
    }}
  /> */}
  
  
  // <Screen>
  //   <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)}/>
  // </Screen>
  
  // const categories = [
    //   { label: 'Furniture', value: 1},
    //   { label: 'Clothing', value: 2},
    //   { label: 'Cameras', value: 3}
    // ];
    
    // <Screen>
    //   <AppPicker 
    //     icon='apps' 
    //     placeholder='Categories'
    //     items={categories}  
    //     selectedItem={category}
    //     onSelectItem={item => setCategory(item)}
    //     />
    //   <AppTextInput icon='email' placeholder='Email'/>
    // </Screen>
    
    // const Link = () => {
      //   const navigation = useNavigation();
      //   return (
        //     <Button 
        //       title='Click'
        //       onPress={() => navigation.navigate('Details', { TweetID: 1})} //Always match the navigate parameter with the name of the stack screem, not component name
        //     />
        //   )
        // }
        
        // const Tweets = () => {
          //   return(
            //     <Screen>
            //       <Text>Tweets</Text>
            //       <Link />
            //     </Screen>
            //   )
            // }
            
            // const TweetDetails = ({ route }) => {
              //   const { TweetID } = route.params 
              //   return (
                //   <Screen>
                //     <Text>
                //       TweetID: {JSON.stringify(TweetID)}
                //     </Text>
                //   </Screen>
                //   )
                // }
                
                // const Account = () => {
                  //   return(
                    //     <Screen>
                    //       <Text>
                    //         Account
                    //       </Text>
                    //     </Screen>
                    //   )
                    // }
                    
                    // const Stack = createNativeStackNavigator();
                    
                    // const StackNavigator = () => {
                      //   return(
                        //       <Stack.Navigator 
              //       initialRouteName='Tweets'
              //       screenOptions={{ // global options for screen header
              //         headerStyle: { backgroundColor: 'dodgerblue'},
              //         headerTintColor: 'white'
              //       }}
              //       >
              //         <Stack.Screen 
              //           name='Details' //Default Header Name
              //           component={TweetDetails}
              //           options={({ route }) => ({ title: 'Tweet Details ' + JSON.stringify(route.params.TweetID) })} //Allows you to change title
              //         />
              //         <Stack.Screen name='Tweets' component={Tweets}/>
              //       </Stack.Navigator>
              //   )
              // }
              
              // const Tab = createBottomTabNavigator()
              // const TabNavigator = () => {
                //   return(
                  //     <Tab.Navigator 
                  //       screenOptions={{
                    //         tabBarActiveBackgroundColor: 'dodgerblue',
                    //         tabBarActiveTintColor: 'white',
                    //         tabBarInactiveBackgroundColor: '#eee',
                    //         tabBarInactiveTintColor: 'black'
                    //       }}
                    //     >
                    //       <Tab.Screen 
                    //         name='Feed' 
                    //         component={StackNavigator}
                    //         options={{
      //           tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={color}/>
      //         }}
      //       />
      //       <Tab.Screen 
      //         name='Account' 
      //         component={Account}
      //         options={{
        //           tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='account' size={size} color={color}/>
        //         }}  
        //       />
        //     </Tab.Navigator>
        //   )
        // }
        //NetInfo.fetch().then(netInfo => console.log(netInfo)) -> Check Network info
        //NetInfo.addEventListener(netInfo => console.log(netInfo)) // check network status

        // const netInfo = useNetInfo()
        // const demo = async () => {
        //   try {
        //     AsyncStorage.setItem('person', JSON.stringify({ id: 1 }))
        //     const value = await AsyncStorage.getItem('person')
        //     const person = JSON.parse(value)
        //     console.log(person)
        //   } catch (error) {
        //     console.log(error)
        //   }
        // }
        // const clearStorage =  async() => {
        //   AsyncStorage.clear()
        // }