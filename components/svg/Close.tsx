import styled from "styled-components"

interface CloseIconProps {
  className?: string
}

const CloseIcon = styled(CloseIconSvg)`
  width: 42px;
  height: 42px;
  cursor: pointer;
  outline: none !important;
  border: 0;
  @media (max-width: 500px) {
    width: 36px;
    height: 36px;
  }
`
function CloseIconSvg({ className }: CloseIconProps) {
  return (
    <svg className={ className } viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="40" height="40" rx="20" fill="#F7F9FC"/>
      <path d="M23.2392 21L30.0365 14.2027C30.6556 13.5837 30.6556 12.583 30.0365 11.9639C29.4174 11.3448 28.4167 11.3448 27.7976 11.9639L21.0004 18.7612L14.2031 11.9639C13.5841 11.3448 12.5834 11.3448 11.9643 11.9639C11.3452 12.583 11.3452 13.5837 11.9643 14.2027L18.7616 21L11.9643 27.7972C11.3452 28.4163 11.3452 29.417 11.9643 30.0361C12.2731 30.3448 12.6784 30.5 13.0837 30.5C13.4891 30.5 13.8944 30.3448 14.2031 30.0361L21.0004 23.2388L27.7976 30.0361C28.1064 30.3448 28.5117 30.5 28.9171 30.5C29.3224 30.5 29.7277 30.3448 30.0365 30.0361C30.6556 29.417 30.6556 28.4163 30.0365 27.7972L23.2392 21Z" fill="#2E3A59"/>
      <rect x="1" y="1" width="40" height="40" rx="20" stroke="#8F9BB3" />
    </svg>
    
  )
}

export { CloseIcon }