<<<<<<< HEAD
import copyImg from "../assets/images/copy.svg"
import "../styles/room-code.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useTheme} from "../hooks/useTheme"


type RoomCodeProps = {
    code: string;
=======
import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string
>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9
}
const customId = "custom-id-yes";
const codeLight = () => toast("Código da sala copiado", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: customId,
});
const codeDark = () => toast.dark("Código da sala copiado", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: customId,
});

export function RoomCode(props: RoomCodeProps) {
<<<<<<< HEAD
    const {themeName} = useTheme()
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
        if (themeName === 'light') {
            codeLight()
        }
        else {
            codeDark()
        }
        

    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        <button className={`room-code ${themeName}`} title="Copiar código da sala" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code"/>
            </div>
            <span >Sala #{props.code}</span>
        </button>
        </>    
    )
=======
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  )
>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9
}