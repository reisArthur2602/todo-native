import {
  Text,
  SafeAreaView,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import React from 'react';
import { theme } from '../../theme';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <Image source={require('../../../assets/logo.png')} />
      {/* add task input */}
      <View style={styles.InputContainer}>
        <TextInput placeholder='Título da tarefa...' placeholderTextColor={theme.colors.base.gray600} style={styles.Input}/>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default HomeScreen;
