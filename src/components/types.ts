export interface NavigationInterface {
  navigate: (value: string) => void;
}
export interface LoginComponentsProps {
  error: any;
  form: {username: string; password: string};
  onChange: any;
  loading: boolean;
  onSubmit: () => void;
}
export type ButtonItems = {
  title?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
};
export type InputItems = {
  value?: string;
  onChangeText?: any;
  placeholder?: string;
  label?: string;
  error?: boolean;
  disabled?: boolean;
};
export type StyledInputProps = {
  type?: string;
  error?: boolean;
  errorRepeatPassword?: boolean;
};
export type StyledTextInputProps = {
  error?: boolean;
};

export type StyledButtonProps = {
  small?: boolean;
};

export type SpinnerProps = {
  screenWidth: number;
  screenHeight: number;
};
