import { useEffect, useState } from 'react';
import { ContainerIn } from '../components/defaults/sharedstyles';
import CatchPokemon from '../components/features/CatchPokemon';
import Sidebar from '../components/features/Sidebar';
import AshFront from '../components/img/AshFront';
import Modal from '../components/modal/Modal';
import { usePokemon } from '../services/hooks/pokemon';
import AshWalking from '../components/img/AshWalking';

export default function Play() {
  const [open, setOpen] = useState(false);
  const {fetchPokemon, fetchState} = usePokemon();

  useEffect(() => {
    if (fetchState === 'success') {
      setOpen(true);
    }
  }, [fetchState]);

  const showModal = () => {
    fetchPokemon();
  };

  return (
    <ContainerIn>
      <Sidebar />
      {fetchState === 'loading' ? <AshWalking/> : <AshFront onClick={showModal} />}
      <Modal open={open} setOpen={setOpen}>
        <CatchPokemon setOpen={setOpen} />
      </Modal>
    </ContainerIn>
  );
}
