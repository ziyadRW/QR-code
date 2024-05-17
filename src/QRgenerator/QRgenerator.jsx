import React,{useState} from 'react'
import QRCode from 'react-qr-code';
import './QRgenerator.css'
const QRgenerator = () => {

    const [input, setInput]=useState('');
    const [qrCode, setQrCode]= useState('');
    const [show, setShoww]= useState(false);
    const [primaryColor, setPrimaryColor]= useState('#9000ff');

    const root = document.documentElement;
    const changeColor = (color) => {
        setPrimaryColor(color);
        root.style.setProperty('--primary-color', color);
    };

    const inputHandler = (e)=>{
        setInput(e.target.value)
    }
    const qrCodeHandler = ()=>{
        setQrCode(input)
        setShoww(true);
        setInput('');
    }
    const look = () => {
        const linkRegex = /(https?:\/\/[^\s]+)/g;
        const matches = qrCode.match(linkRegex);

        if (matches && matches.length > 0) {
            const link = matches[0];
            window.open(link, '_blank');
        }
        else{
            const searchQuery = encodeURIComponent(qrCode); // Encode the search query
        const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;
        window.open(googleSearchUrl, '_blank');
        }
    }
    
  return (
    
    <div>
        <div className="colors">
            <button className='purple' onClick={() => changeColor('#9000ff')}></button>
            <button className='green' onClick={() => changeColor('#1fb21f')}></button>
            <button className='red' onClick={() => changeColor('#e92c2c')}></button> 
        </div>
        <div className='form'>
            <h1>
            QR Code Generator
        </h1>
        <form onSubmit={qrCodeHandler}>
            <input value={input}  onChange={inputHandler} type="text" name='qrCode' placeholder='Paste a Link or search for somthing in google' />
            <button className='glow-on-hover' disabled={input.trim() =='' ? true : false} onClick={qrCodeHandler} >Generate</button>
        </form>
            
        </div>
        <div onClick={look} style={{display: show ? 'block' : 'none'}} className='coode'>
            <button className='hide' onClick={()=> setShoww(false)}>x</button>
            <QRCode 
                id='qr-code-value'
                value={qrCode}
                size={280}
                fgColor={primaryColor}
            />
        </div>
    </div>
  )
}

export default QRgenerator