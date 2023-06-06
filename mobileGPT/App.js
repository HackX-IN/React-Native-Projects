import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { getChatGptResponse } from './chatAPI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function ChatBot() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInput = async () => {
    if (inputText !== '') {
      const chatGptResponse = await getChatGptResponse(inputText);
      setMessages([...messages, { message: inputText, isUser: true }]);
      setMessages([...messages, { message: chatGptResponse, isUser: false }]);
      setInputText('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.responseContainer,
              { alignSelf: message.isUser ? 'flex-end' : 'flex-start' },
            ]}
          >
            <Text style={styles.responseText}>{message.message}</Text>
          </View>
        ))}
      </ScrollView>
      {/* <KeyboardAwareScrollView style={{width:'100%',position:'relative'}}> */}
      <View style={styles.inputContainer}>
      
        <Input
          placeholder="Ask Your Query ..."
          value={inputText}
          onChangeText={setInputText}
          rightIcon={
            <Button
              title="Send"
              onPress={handleInput}
              buttonStyle={styles.sendButton}
            />
          }
        />
       
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  responseContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    maxWidth: '80%',
    position:'relative',
    fontSize:16
    
  },
  responseText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    position:'relative',
    
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    
    
  },
});
