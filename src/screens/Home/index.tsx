import {
  Text,
  SafeAreaView,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { styles } from './styles';
import React, { useState } from 'react';
import { theme } from '../../theme';
import TaskCard from '../../components/task-card/TaskCard';
import { Task } from '../../dtos/TaskDTO';

const HomeScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>('');

  const deleteTask = (id: string) => {
    const filter = tasks.filter((task) => task.id !== id);
    setTasks(filter);
  };

  const createTask = () => {
    const task = [
      ...tasks,
      {
        isCompleted: false,
        title,
        id: String(Math.floor(Math.random() * 100000)),
      },
    ];

    setTasks(task);
  };

  const toggleCompleted = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo.png')} />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          placeholder="Título da tarefa..."
          placeholderTextColor={theme.colors.base.gray600}
          style={styles.Input}
          onChangeText={setTitle}
        />
        <TouchableOpacity style={styles.addBtn} onPress={createTask}>
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{
          gap: 16,
          flex: 1,
        }}
      >
        <View style={styles.taskCountContainer}> 
          <Text style={styles.taskCount}>{`Tarefas(${tasks.length})`}</Text>
          <Text style={styles.taskCompleteCount}>{`Concluidas(${
            tasks.filter((task) => task.isCompleted).length
          })`}</Text>
        </View>

        <FlatList
          contentContainerStyle={{ gap: 6 }}
          data={tasks}
          renderItem={({ item }) => (
            <TaskCard
              {...item}
              handleDelete={deleteTask}
              toggleCompleted={toggleCompleted}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
