import React,{Component, useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Slider, Switch} from 'react-native';
import { Block, Text, PanSlider } from '../../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class SettingsLight extends Component{
    static navigationOptions = {
        headerLeft: ({ onPress }) => (
            <Block>
                <TouchableWithoutFeedback onPress={() => onPress()}>
                    <FontAwesome size={20} color={'#000'} name="arrow-left"/>
                </TouchableWithoutFeedback>
            </Block>
        ),
        headerLeftContainerStyle:{
            paddingLeft: 14,
        },
    };

    


    render() {
        const {navigation} = this.props;
        return(
            <Block flex={1} style={styles.settings}>
                <Block row style={{justifyContent:'space-around', alignItems:'center'}}>
                    <Block row >
                        <MaterialCommunityIcons size={38} color={'#A7A7A7'} name="lightbulb-on-outline"/>
                        <Text size={25} bold style={{paddingLeft:10}}>Light</Text>
                    </Block>
                </Block>

                <Block column style={{justifyContent:'space-around', paddingTop: 50}}>
                    <Block row style={styles.list}>
                        <Text name>Sala - Lampada 1</Text>
                        <Switch trackColor={{ false: "#A7A7A7", true: "#D7A3F7" }} thumbColor={"#3D065F"} value={true}/>
                    </Block>
                    <Block row style={styles.list}>
                        <Text name>Sala - Lampada 2</Text>
                        <Switch trackColor={{ false: "#A7A7A7", true: "#D7A3F7" }} thumbColor={"#3D065F"} value={false}/>
                    </Block>
                    <Block row style={styles.list}>
                        <Text name>Cozinha - Lampada 1</Text>
                        <Switch trackColor={{ false: "#A7A7A7", true: "#D7A3F7" }} thumbColor={"#3D065F"} value={false}/>
                    </Block>
                    <Block row style={styles.list}>
                        <Text name>Cozinha - Lampada 2</Text>
                        <Switch trackColor={{ false: "#A7A7A7", true: "#D7A3F7" }} thumbColor={"#3D065F"} value={true}/>
                    </Block>
                    <Block row style={styles.list}>
                        <Text name>Corredor - Lampada</Text>
                        <Switch trackColor={{ false: "#A7A7A7", true: "#D7A3F7" }} thumbColor={"#3D065F"} value={false}/>
                    </Block>
                </Block>
            </Block>
        )
    }
}
export default SettingsLight;

const styles = StyleSheet.create({
    settings: {
        paddingHorizontal: 14,
        paddingVertical: 20,

    }, 
    list: {
        justifyContent:'space-around',
        paddingBottom: 20
    }
    
})