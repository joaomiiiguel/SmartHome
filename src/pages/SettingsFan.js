import React,{Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Slider} from 'react-native';
import { Block, Text, PanSlider } from '../../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class SettingsFan extends Component{
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
                    <Block row >
                    <MaterialCommunityIcons size={38} color={'#A7A7A7'} name="fan"/>
                        <Text size={25} bold style={{paddingLeft:10}}>Fan</Text>
                    </Block>
                </Block>
                <Block flex style={{ paddingTop: 20}}>

                    <Block column style={{ marginVertical: 14}}>
                        <Block row space="between">
                            <Text name>Speed </Text>
                            <Text>{this.state.speed}</Text>
                        </Block>
                        <Slider 
                            value={12}
                            mininumValue={0} 
                            maximumValue={30} 
                            thumbTintColor={"#3D065F"}
                            minimumTrackTintColor={"#3D065F"}
                            onValueChange={value => this.setState({speed: parseInt(value,10)})}
                        />
                    </Block>
                </Block>
            </Block>
        )
    }
}
export default SettingsFan;

const styles = StyleSheet.create({
    settings: {
        paddingHorizontal: 14,
        paddingVertical:20,
    },  

    slider:{

    }
    
})