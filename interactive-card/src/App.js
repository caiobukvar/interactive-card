
import './App.css';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Button,
  HStack,
  Text
} from '@chakra-ui/react'
import { useState } from 'react';
import bgCardFront from './assets/images/bg-card-front.png'
import bgCardBack from './assets/images/bg-card-back.png'

function App() {
  const [input, setInput] = useState({
    cardholder: '',
    cardNumber: '',
    expDateMM: '',
    expDateYY: '',
    CVC: ''
  })

  const isErrorCardholder = input.cardholder === ''
  const isErrorCardNumber = input.cardNumber === ''
  const isErrorExpDate = input.expDateMM === '' || input.expDateYY === ''
  const isErrorCVC = input.CVC === ''

  return (
    <div className="App">
      <header className="App-header">
        <VStack className="card-container">
          <VStack className='card-top'>
            <VStack className='bgcard card--1' src={bgCardFront} alt="cc-front">
              <Text className='card-number-text'>{input.cardNumber || '0000 0000 0000 0000'}</Text>
              <Text className='card-holder-text'>{input.cardholder || 'Jane Appleseed'}</Text>
              <Text className='card-exp-text'>{`${input.expDateMM || "00"}/${input.expDateYY || "00"}`}</Text>
            </VStack>
            <VStack className='bgcard card--2' src={bgCardBack} alt="cc-back">
              <Text className='bgtext'>{input.CVC || '000'}</Text>
            </VStack>
          </VStack>
          <VStack className='form-container' >
            <FormControl isInvalid={isErrorCardholder} >
              <FormLabel>CARDHOLDER NAME</FormLabel>
              <Input
                type='text'
                value={input.cardholder}
                placeholder="e.g. Jane Appleseed"
                onChange={(e) => setInput({ ...input, cardholder: e.target.value })}
              />
              {isErrorCardholder && (
                <FormErrorMessage>Cardholder name is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={isErrorCardNumber} >
              <FormLabel>CARD NUMBER</FormLabel>
              <Input
                type='text'
                value={input.cardNumber}
                placeholder="e.g. 1234 5678 9123 0000"
                onChange={(e) => setInput({ ...input, cardNumber: e.target.value })}
              />
              {isErrorCardNumber && (
                <FormErrorMessage>Card number is required.</FormErrorMessage>
              )}
            </FormControl>

            <HStack textAlign='start' alignItems='start' spacing={3}>
              <FormControl isInvalid={isErrorExpDate} >
                <FormLabel>EXP. DATE (MM/YY)</FormLabel>
                <HStack>
                  <Input
                    type='number'
                    value={input.expDateMM}
                    placeholder="MM"
                    onChange={(e) => setInput({ ...input, expDateMM: e.target.value })}
                  />
                  <Input
                    type='number'
                    value={input.expDateYY}
                    placeholder="YY"
                    onChange={(e) => setInput({ ...input, expDateYY: e.target.value })}
                  />
                </HStack>
                {isErrorExpDate && (
                  <FormErrorMessage>Card expiration date is required.</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={isErrorCVC} >
                <FormLabel>CVC</FormLabel>
                <Input
                  type='text'
                  value={input.CVC}
                  placeholder="e.g. 123"
                  onChange={(e) => setInput({ ...input, CVC: e.target.value })}
                />
                {isErrorCVC && (
                  <FormErrorMessage>CVC is required.</FormErrorMessage>
                )}
              </FormControl>
            </HStack>
            <Button w='100%' bgColor='#21092F' color='#fff' fontWeight='500'>
              Confirm
            </Button>
          </VStack>
        </VStack>
      </header>
    </div>
  );
}

export default App;
