import MemesData from './MemesData';
import React from 'react';

function Content() {
    let imgUrl;
    let memeName;
    let topText;
    let bottomText;
    const [result, setResult] = React.useState({imageUrl: '', value: '', topText: '', bottomText: ''});
    const [allMemesData, setAllMemesData] = React.useState({});

    React.useEffect(async () => {
        const res = await fetch('https://api.imgflip.com/get_memes');
        const data = await res.json();
        setAllMemesData(data.data.memes);
    }, []);

    function clickHandler(e) {
        e.preventDefault();
        let randomNumber = Math.floor(Math.random() * allMemesData.length);
        imgUrl = allMemesData[randomNumber].url;
        memeName = allMemesData[randomNumber].name;

        setResult((result) => {
            return {...result, imageUrl: imgUrl, value: memeName, bottomText: '', topText: ''}
        });
    }

    function onKeyPress(value, position) {
        let data;

        if (position === 'top') {
            setResult((result) => {
                return {...result, topText: value.target.value}
            });
        } else {
            setResult((result) => {
                return {...result, bottomText: value.target.value}
            });
        }
    }

    return (
        <div className="main-container">
            <div className="form-wrapper">
                <form action="#">
                    <input type="text" onChange={value => onKeyPress(value, 'top')} className="input-field" name="screen-two" value={result.topText} placeholder="top text" />
                    <input type="text" onChange={value => onKeyPress(value, 'bottom')} className="input-field" name="screen-one" value={result.bottomText} placeholder="bottom text" />
                    <button type="submit" onClick={clickHandler} className="btn-submit">Get a new meme image 🖼</button>
                </form>
            </div>

            <div className="preview-wrapper">
                {result.imageUrl ? (
                    <>
                        {result.topText ? <h3 className="top-text-wrapper">{result.topText}</h3> : ''}
                        <img src={result.imageUrl} alt={result.value} />
                        {result.bottomText ? <h3 className="bottom-text-wrapper">{result.bottomText}</h3> : ''}
                    </>
                ) : ''}
            </div>
        </div>
    );
}

export default Content;