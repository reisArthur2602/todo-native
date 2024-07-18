import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Task } from '../../dtos/TaskDTO';
import { Circle, CircleCheck, Trash } from 'lucide-react-native';
import { theme } from '../../theme';

const TaskCard = ({ id, isCompleted, title }: Task) => {
  const handleDelete = (id: string) => {
    console.log(id);
  };
  const ToggleComplete = () => {};

  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => ToggleComplete}>
        {isCompleted ? (
          <CircleCheck size={20} color={theme.colors.base.gray50} />
        ) : (
          <Circle size={20} color={theme.colors.base.gray50} />
        )}
      </TouchableOpacity>

      <Text
        style={[
          styles.taskTitle,
          isCompleted && {
            textDecorationLine: 'line-through',
            color: theme.colors.base.gray100,
          },
        ]}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={() => handleDelete(id)}>
        <Trash size={20} color={theme.colors.base.indigo} />
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
