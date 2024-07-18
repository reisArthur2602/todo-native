import {
  Text,
  SafeAreaView,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { styles } from './styles';
import React from 'react';
import { theme } from '../../theme';
import TaskCard from '../../components/task-card/TaskCard';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo.png')} />
      </View>
      {/* add task input */}
      <View style={styles.InputContainer}>
        <TextInput
          placeholder="Título da tarefa..."
          placeholderTextColor={theme.colors.base.gray600}
          style={styles.Input}
        />
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{
          gap: 16,
          flex: 1,
        }}
      >
        <Text style={styles.taskCount}>{`Tarefas(0)`}</Text>

        <TaskCard id="" isCompleted title="Título da tarefa" />
        <TaskCard id="" isCompleted={false} title="Título da tarefa" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
