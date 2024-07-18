import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: theme.colors.base.gray700,
    height: 52,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  taskTitle: {
    color: theme.colors.base.gray50,
    fontSize: theme.font_size.sm,
    fontFamily: theme.font_weight.medium,
  },
});
