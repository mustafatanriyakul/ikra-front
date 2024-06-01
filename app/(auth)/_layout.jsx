import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
const AuthLayout = () => {
  return (
    <>
      <Stack>
      <Stack.Screen 
          name='deneme'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
        name='sign-in'
        options={{
          headerShown: false
        }}
      />
        <Stack.Screen 
          name='sign-up'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='createRequest'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='createLostItem'
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name='all_LostItems'
          options={{
            headerShown: false
          }}
        />
          <Stack.Screen 
          name='oneLostItem'
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name='finance'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='transaction'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='all_transactions'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='all_Requests'
          options={{
            headerShown: false
          }}
        />
      </Stack>
    
      <StatusBar backgroundColor='#161622'
      style='light' />
    </>
  )
}

export default AuthLayout