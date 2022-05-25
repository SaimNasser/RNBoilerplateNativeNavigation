import React from 'react';
import { Text, View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Button from '../../components/Button';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectIsLogin } from '../../redux/slices/authSlice'
import { Navigation } from 'react-native-navigation';
// import { TEST_KEY } from '@env'
export default function Login(props) {
    const dispatch = useDispatch()
    const isLogin = useSelector(selectIsLogin)
    return (
        <ScreenWrapper>
            <View style={styles.mainViewContainer}>
                <Text style={styles.title}>LOGIN SCREEN</Text>
                <Button
                    title={'Login'}
                    onPress={() => {
                        Navigation.setStackRoot(props.componentId, {
                            component: {
                                name: 'Home',
                                passProps: { name: 'Saim' }
                            }
                        })
                    }}
                />
            </View>
        </ScreenWrapper>
    );
}
