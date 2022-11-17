export interface LoginComponentsProps {
  error: any;
  form: { username: string; password: string };
  onChange: any;
  loading: boolean;
  onSubmit: () => void;
}
export type ButtonItems = {
  title: string;
  onPress?: () => void;
};
export type InputItems = {
  value?: string;
  onChangeText?: any;
  placeholder?: string;
  label?: string;
  error?: boolean;
  secureTextEntry?: boolean;
};
export type StyledInputProps = {
  type?: string;
  error?: boolean;
  errorRepeatPassword?: boolean;
};
export type StyledTextInputProps = {
  error?: boolean;
};
export type SpinnerProps = {
  screenWidth: number;
  screenHeight: number;
};
