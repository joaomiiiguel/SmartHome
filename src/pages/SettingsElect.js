import React,{Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Slider} from 'react-native';
import { Block, Text, PanSlider } from '../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class SettingsElect extends Component{
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
        const name = navigation.getParam('name');
        return(
            <Block flex={1} style={styles.settings}>
                <Block row style={{justifyContent:'space-around'}}>
                    <Block column >
                        <FontAwesome size={38} color={'#A7A7A7'} name="snowflake-o"/>
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
                <Block flex style={{ paddingTop: 20}}>
                    <Block column style={{ marginVertical: 14}}>
                        <Block row space="between">
                            <Text name>Direction </Text>
                            <Text>{this.state.direction}</Text>
                        </Block>
                        <Slider 
                            value={45}
                            mininumValue={0} 
                            maximumValue={90} 
                            thumbTintColor={"#3D065F"}
                            minimumTrackTintColor={"#3D065F"}
                            onValueChange={value => this.setState({direction:  parseInt(value,10)})} 
                        />
                    </Block>

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
export default SettingsElect;

const styles = StyleSheet.create({
    settings: {
        paddingHorizontal: 14,
        paddingVertical:20,
    },  

    slider:{

    }
    
})