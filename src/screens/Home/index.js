import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { logout, selectIsLogin } from '../../redux/slices/authSlice';
import styles from './styles';
export default function Home(props) {
    console.log(props);
    const isLogin = useSelector(selectIsLogin)
    return (
        <ScreenWrapper>
            <View style={styles.mainViewContainer}>
                <Text style={styles.title}>HOME SCREEN</Text>
                <Button
                    title={'Logout'}
                    onPress={() => Navigation.setStackRoot(props.componentId, {
                        component: {
                            name: 'Login',
                        }
                    })}
                />
            </View>
        </ScreenWrapper>
    );
}
