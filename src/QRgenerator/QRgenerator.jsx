import React,{useState} from 'react'
import QRCode from 'react-qr-code';
import './QRgenerator.css'
const QRgenerator = () => {

    const [input, setInput]=useState('');
    const [qrCode, setQrCode]= useState('');
    const [show, setShoww]= useState(false);

    const inputHandler = (e)=>{
        setInput(e.target.value)
    }
    const qrCodeHandler = ()=>{
        setQrCode(input)
        setShoww(true);
        setInput('');
    }

  return (
    <div>
        
        <div className='form'
        ><h1>
            QR Code Generator
        </h1>
        <form onSubmit={qrCodeHandler}>
            <input value={input}  onChange={inputHandler} type="text" name='qrCode' placeholder='Paste a Link !' />
            <button className='glow-on-hover' disabled={input.trim() =='' ? true : false} onClick={qrCodeHandler} >Generate</button>
        </form>
            
        </div>
        <div style={{display: show ? 'block' : 'none'}} className='coode'>
            <button className='hide' onClick={()=> setShoww(false)}>x</button>
            <QRCode 
                id='qr-code-value'
                value={qrCode}
                size={300}
                fgColor='#9000ff'
            />
        </div>
    </div>
  )
}

export default QRgenerator