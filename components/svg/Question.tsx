import styled from "styled-components"

interface QuestionIconProps {
  className?: string
}

const QuestionIcon = styled(QuestionIconSvg)`
  width: 19px;
  height: 29px;
`
function QuestionIconSvg({ className }: QuestionIconProps) {
  return (
    <svg className={className} viewBox="0 0 19 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    // <path fillRule="evenodd" clipRule="evenodd" d="M9.60734 0.516785C14.3893 0.516785 18.2797 4.40722 18.2797 9.18918C18.2797 13.3762 15.2947 16.8816 11.3418 17.6847V19.5961C11.3418 20.5552 10.5665 21.3305 9.60734 21.3305C8.64817 21.3305 7.87286 20.5552 7.87286 19.5961V16.1271C7.87286 15.1679 8.64817 14.3926 9.60734 14.3926C12.4762 14.3926 14.8108 12.058 14.8108 9.18918C14.8108 6.32035 12.4762 3.98574 9.60734 3.98574C6.73851 3.98574 4.4039 6.32035 4.4039 9.18918C4.4039 10.1484 3.62858 10.9237 2.66942 10.9237C1.71025 10.9237 0.934937 10.1484 0.934937 9.18918C0.934937 4.40722 4.82538 0.516785 9.60734 0.516785ZM7.87283 26.534C7.87283 25.5749 8.64814 24.7995 9.60731 24.7995C10.5665 24.7995 11.3418 25.5749 11.3418 26.534C11.3418 27.4932 10.5665 28.2685 9.60731 28.2685C8.64814 28.2685 7.87283 27.4932 7.87283 26.534Z" fill="#004A45"/>
    // </svg> 
  )
}

export { QuestionIcon }