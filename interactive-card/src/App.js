
import './App.css';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  HStack
} from '@chakra-ui/react'
import { useState } from 'react';
import CardHolderInput from './components/CardHolderInput';
import CardNumberInput from './components/CardNumberInput';
import ExpirationMonthInput from './components/ExpirationMonthInput';
import ExpirationYearInput from './components/ExpirationYearInput';
import CVCInput from './components/CVCInput';

function App() {
  const [input, setInput] = useState({
    cardholder: '',
    cardNumber: '',
    expDateMM: '',
    expDateYY: '',
    CVC: ''
  })

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  return (
    <div className="App">
      <header className="App-header">
        <VStack className="card-container">
          <VStack>
            <img src="" alt="card-front" />
            <img src="" alt="card-back" />
          </VStack>
          <VStack>
            <FormControl isInvalid={isError}>
              <CardHolderInput input={input} setInput={setInput} />
              <CardNumberInput input={input} setInput={setInput} />

              <HStack>
                <VStack alignItems={'start'}>
                  <FormLabel>Exp. date (MM/YY)</FormLabel>
                  <HStack>
                    <ExpirationMonthInput input={input} setInput={setInput} />
                    <ExpirationYearInput input={input} setInput={setInput} />
                  </HStack>
                </VStack>
                <CVCInput input={input} setInput={setInput} />
              </HStack>
            </FormControl>
          </VStack>
        </VStack>
      </header>
    </div>
  );
}

export default App;
