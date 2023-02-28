
import {
  Button, FormControl, FormErrorMessage, FormLabel, HStack, Image, Input, Stack, Text, VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import bgCardBack from './assets/images/bg-card-back.png';
import bgCardFront from './assets/images/bg-card-front.png';
import cardLogo from './assets/images/card-logo.svg';
import Complete from './assets/images/icon-complete.svg';

function App() {
  const [submited, setSubmited] = useState(false);
  const [input, setInput] = useState({
    cardholder: null,
    cardNumber: null,
    expDateMM: null,
    expDateYY: null,
    CVC: null
  })

  function sendData(value) {
    if (value === 'open') {
      if (!isErrorCardholder && !isErrorCardNumber && !isErrorExpDate && !isErrorCVC) {
        setSubmited(true);
      }
      return
    }
    if (value === 'close') {
      setSubmited(false);
    }
  }

  const isErrorCardholder = input.cardholder === ''
  const isErrorCardNumber = input.cardNumber === ''
  const isErrorExpDate = input.expDateMM === '' || input.expDateYY === ''
  const isErrorCVC = input.CVC === ''

  return (
    <div className="App">
      <header className="App-header">
        <Stack className="card-container">
          <VStack className='card-top'>
            <VStack className='card-top-content'>
              <VStack className='bgcard card--1' src={bgCardFront} alt="cc-front">
                <Image className='card-logo' src={cardLogo} />
                <Text className='card-number-text'>{input.cardNumber || '0000 0000 0000 0000'}</Text>
                <Text className='card-holder-text'>{input.cardholder || 'Jane Appleseed'}</Text>
                <Text className='card-exp-text'>{`${input.expDateMM || "00"}/${input.expDateYY || "00"}`}</Text>
              </VStack>
              <VStack className='bgcard card--2' src={bgCardBack} alt="cc-back">
                <Text className='cvc-text'>{input.CVC || '000'}</Text>
              </VStack>
            </VStack>
          </VStack>
          {!submited ? <VStack className='form-container'>
            <VStack className='form-content'>
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
                  type='number'
                  value={input.cardNumber}
                  placeholder="e.g. 1234 5678 9123 0000"
                  onChange={(e) => setInput({ ...input, cardNumber: e.target.value })}
                />
                {isErrorCardNumber && (
                  <FormErrorMessage>Card number is required.</FormErrorMessage>
                )}
              </FormControl>

              <HStack className="bottom-inputs">
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
                    <FormErrorMessage >Card expiration date is required.</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl isInvalid={isErrorCVC}>
                  <FormLabel className='cvc-label'>CVC</FormLabel>
                  <HStack alingItems='center'>
                    <Input
                      type='text'
                      value={input.CVC}
                      placeholder="e.g. 123"
                      onChange={(e) => setInput({ ...input, CVC: e.target.value })}
                    />
                  </HStack>
                  {isErrorCVC && (
                    <FormErrorMessage textAlign='start'>CVC is required.</FormErrorMessage>
                  )}
                </FormControl>
              </HStack>
              <Button
                w='100%'
                bgColor='#21092F'
                color='#fff'
                fontWeight='500'
                onClick={() => sendData('open')}
              >
                Confirm
              </Button>
            </VStack>
          </VStack> :
            <VStack spacing={10}>
              <VStack spacing={5}>
                <Image src={Complete} alt='completion icon' />
                <Text fontSize='28px'>THANK YOU!</Text>
                <Text fontSize='18px'>We've added your card details</Text>
              </VStack>
              <Button
                w='100%'
                bgColor='#21092F'
                color='#fff'
                fontWeight='500'
                onClick={() => sendData('close')}
              >
                Continue
              </Button>
            </VStack>
          }

        </Stack>
      </header>
    </div>
  );
}

export default App;
