import * as Dialog from '@radix-ui/react-dialog';
import styled, { keyframes } from 'styled-components';
import { CloseIcon } from '../svg/Close';

const InvisibleBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`
// Radix Dialog Styles
const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});
const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});
const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.35);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`
const DialogContent = styled(Dialog.Content)`
  position: relative;
  background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);
  border-radius: 8px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  max-width: 360px;
  max-height: 580px;
  padding: 1.5rem 0 0 0;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`

const IconButton = styled.button`
  height: 25;
  width: 25;
  display: 'inline-flex';
  align-items: 'center';
  justify-content: 'center';
  background: transparent;
  border: 0;
  position: absolute;
  top: 10px;
  right: 10px;
`
//

export default function Modal({ open, setOpen, children }) {
  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <DialogOverlay />
          <DialogContent>
            <Dialog.Close asChild>
              <IconButton aria-label="Close">
                <CloseIcon />
              </IconButton>
            </Dialog.Close>
            {children}
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
