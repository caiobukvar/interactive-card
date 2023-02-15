import {
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'

function CardHolderInput({ input, setInput }) {
  const handleInputChange = (e) => setInput({ cardholder: e.target.value })

  const isError = input.cardholder === ''

  return (
    <>
      <FormLabel>Cardholder name</FormLabel>
      <Input
        type='text'
        value={input.cardholder}
        placeholder="e.g. Jane Appleseed"
        onChange={handleInputChange}
      />
      {
        isError && (
          <FormErrorMessage>Cardholder name is required.</FormErrorMessage>
        )
      }
    </>
  );
}

export default CardHolderInput;