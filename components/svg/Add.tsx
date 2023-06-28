import styled from "styled-components"

interface AddIconProps {
  className?: string
}

const AddIcon = styled(AddIconSvg)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  outline: none !important;
  border: 0;
  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`
function AddIconSvg({ className }: AddIconProps) {
  return (
    <svg className={ className } viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M23.2917 10.9583H14.0417V1.70832C14.0417 0.855781 13.351 0.166656 12.5 0.166656C11.649 0.166656 10.9583 0.855781 10.9583 1.70832V10.9583H1.70832C0.857323 10.9583 0.166656 11.6474 0.166656 12.5C0.166656 13.3525 0.857323 14.0417 1.70832 14.0417H10.9583V23.2917C10.9583 24.1442 11.649 24.8333 12.5 24.8333C13.351 24.8333 14.0417 24.1442 14.0417 23.2917V14.0417H23.2917C24.1427 14.0417 24.8333 13.3525 24.8333 12.5C24.8333 11.6474 24.1427 10.9583 23.2917 10.9583Z" fill="white"/>
    </svg>
    
  )
}

export { AddIcon }
