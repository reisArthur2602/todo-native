import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.colors.base.gray900,
    paddingHorizontal: 35,
    paddingVertical: 45,
    gap: 40,
  },
  logoContainer: {
  width: '100%',

    alignItems: 'center',
  },
  InputContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 6,
  },
  Input: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.base.gray600,
    paddingHorizontal: 12,
    flex: 1,
  },
  addBtn: {
    borderRadius: 5,
    height: 40,
    backgroundColor: theme.colors.base.indigo,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnText: { color: theme.colors.base.gray50 },
  
  taskCount: {
    color: theme.colors.base.gray50,
    fontSize: theme.font_size.lg,
    fontFamily: theme.font_weight.semibold,
  },
});
