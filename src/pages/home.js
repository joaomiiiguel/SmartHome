import React,{Component} from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Block, Text } from '../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import SplashScreen from 'react-native-splash-screen'


import imgLogo from '../assets/logo.png';

class Home extends Component{
    /*componentDidMount() {
        SplashScreen.hide();
    }*/
    

    render() {
        const {navigation} = this.props;

        
        return(
            <ScrollView contentContainerStyle={styles.dashboard} showsVerticalScrollIndicator={false} >
                <Block column style={styles.containerLogo}>
                <Image source={imgLogo} style={styles.Logo} />
                </Block>
                
                <Block column>
                    <Text welcome>Welcome</Text>
                    <Text name>João Miguel</Text>
                </Block>

                <Block row style={{paddingVertical: 10}}>
                    <Block row style={{paddingHorizontal: 10}}>
                        <Text h1>24</Text>
                        <Text name style={{paddingVertical: 20}}>°C</Text>
                    </Block>
                    <Block column style={{paddingLeft: 30, paddingTop: 20}}>
                        <Text caption>Campina Grande</Text>
                        <Text>Paraíba</Text>
                    </Block>
                </Block>


                <Block column space="around" >                  
                    <Block row space="around">
                        <TouchableOpacity 
                        activeOpacity={0.8} 
                        onPress={() => navigation.navigate('SettingsLight')}>
                            <Block style={styles.button}>
                                <MaterialCommunityIcons size={38} color={'#3D065F'} name="lightbulb-on-outline"/>
                                <Text button>Light</Text>
                            </Block>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                        activeOpacity={0.8} 
                        onPress={() => navigation.navigate('SettingsAC')}>
                            <Block style={styles.button} >
                                <FontAwesome size={38} color={'#3D065F'} name="snowflake-o"/>
                                <Text button>AC</Text>
                            </Block>
                        </TouchableOpacity>
                    </Block>

                    <Block row space="around">
                        <TouchableOpacity 
                        activeOpacity={0.8} 
                        onPress={() => navigation.navigate('SettingsTemp')}>
                            <Block style={styles.button} >
                                <FontAwesome size={38} color={'#3D065F'} name="thermometer-2"/>
                                <Text button>Temperature</Text>
                            </Block>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                        activeOpacity={0.8} 
                        onPress={() => navigation.navigate('SettingsFan')}>
                            <Block style={styles.button} >
                                <MaterialCommunityIcons size={38} color={'#3D065F'} name="fan"/>
                                <Text button>Fan</Text>
                            </Block>
                        </TouchableOpacity>
                    </Block>

                    <Block row space="around">
                        <TouchableOpacity 
                        activeOpacity={0.8} 
                        onPress={() => navigation.navigate('SettingsWifi')}>
                            <Block style={styles.button} >
                                <FontAwesome size={38} color={'#3D065F'} name="wifi"/>
                                <Text button>Wi-Fi</Text>
                            </Block>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                        activeOpacity={0.8} 
                        onPress={() => navigation.navigate('SettingsElect')}>
                            <Block style={styles.button} >
                                <FontAwesome size={38} color={'#3D065F'} name="plug"/>
                                <Text button>Electricity</Text>
                            </Block>
                        </TouchableOpacity>
                    </Block>
                    
                </Block>

            </ScrollView>
        )
    }
}


export default Home;

const styles = StyleSheet.create({
    dashboard: {
        paddingHorizontal: 14,
        paddingVertical:20,
        
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECEDEF',
        borderRadius: 151/2,
        height:151,
        width:151,
        marginVertical: 10
    },
    containerLogo: {
        alignItems: 'center',
        paddingVertical: 10
    },
    Logo: {
        width: 220,
        height:80,
    }
})