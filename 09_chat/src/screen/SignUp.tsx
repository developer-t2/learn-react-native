import React, { memo, useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from '@emotion/native';

import { Button, Image, Input } from '../components';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.background,
  paddingVertical: 50,
  paddingHorizontal: 20,
}));

const defaultPhoto =
  'https://firebasestorage.googleapis.com/v0/b/expo-chat-64b70.appspot.com/o/face.png?alt=media';

const SignUp = () => {
  const [photo, setPhoto] = useState(defaultPhoto);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const nameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);

  const onChangePhoto = useCallback((uri: string) => {
    setPhoto(uri);
  }, []);

  const onSubmitEmail = useCallback(() => {
    nameRef.current?.focus();
  }, []);

  const onSubmitName = useCallback(() => {
    passwordRef.current?.focus();
  }, []);

  const onSubmitPassword = useCallback(() => {
    passwordConfirmRef.current?.focus();
  }, []);

  const onSignUp = useCallback(() => {}, []);

  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <Container>
        <Image isPhoto uri={photo} onChangePhoto={onChangePhoto} />

        <Input
          label="Email"
          placeholder="Email"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={onSubmitEmail}
        />

        <Input
          ref={nameRef}
          label="Name"
          placeholder="Name"
          returnKeyType="next"
          value={name}
          onChangeText={setName}
          onSubmitEditing={onSubmitName}
        />

        <Input
          ref={passwordRef}
          label="Password"
          placeholder="Password"
          secureTextEntry
          returnKeyType="next"
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={onSubmitPassword}
        />

        <Input
          ref={passwordConfirmRef}
          label="Password Confirm"
          placeholder="Password Confirm"
          returnKeyType="done"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          onSubmitEditing={onSignUp}
        />

        <Button onPress={onSignUp}>SignUp</Button>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default memo(SignUp);
