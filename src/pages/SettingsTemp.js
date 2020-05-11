import React,{Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Slider} from 'react-native';
import { Block, Text, PanSlider } from '../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class SettingsTemp extends Component{
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

    state = {
        direction: 45,
        speed: 12
    }
    

    render() {
        const {navigation} = this.props;
        return(
            <Block flex={1} style={styles.settings}>
                <Block row style={{justifyContent:'space-around'}}>
                    <Block column >
                        <FontAwesome size={38} color={'#A7A7A7'} name="thermometer-2"/>
                        <Block flex={1.2} row style={{paddingHorizontal: 10, alignitens: 'flex-end'}}>
                            <Text h1>14</Text>
                            <Text name style={{paddingVertical: 20}}>°C</Text>
                        </Block>
                        <Text caption>Temperature Local</Text>
                    </Block>
                    <Block column middle center>
                        <PanSlider />
                    </Block>
                </Block>
            </Block>
        )
    }
}
export default SettingsTemp;

const styles = StyleSheet.create({
    settings: {
        paddingHorizontal: 14,
        paddingVertical:20,
    },  

    slider:{

    }
    
})