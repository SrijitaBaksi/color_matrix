import { useEffect, useState } from "react";
import "./Matrix.scss"

const Matrix= ()=>{

    const gridSize= 3;
    const totalBoxes= gridSize * gridSize;

    const [clickedOrder, setClickedOrder] = useState([]);
    const [colors, setColours] = useState(Array(totalBoxes).fill(""));

    const handleClick = (index)=>{
        if(colors[index]==='green' || clickedOrder.includes(index)) return;

        setClickedOrder((prev)=>[...prev,index]);

        setColours((prev)=>{
            const newColors =[...prev];
            newColors[index]="green";
            return newColors;

        })


    };

    useEffect(() => {
        if (clickedOrder.length === totalBoxes) {
            setTimeout(changeToOrange, 500);
        }
    }, [clickedOrder])

    const changeToOrange=()=>{
        clickedOrder.forEach((index,i)=>{
            setTimeout(()=>{
                setColours((prev)=>{
                    const newColors =[...prev];
                    newColors[index]="orange";
                    return newColors;
                })
            },i*300)
        });
    };

    const resetGrid = () => {
        setClickedOrder([]);
        setColours(Array(totalBoxes).fill(""));
    };

    return(
        <div className="container">
            <h1>Clickable Matrix Fun</h1>
            <div className="grid">
                {colors.map((color,index)=>(
                    <div 
                    key={index}
                    className={`box ${color}`}
                    onClick={()=>handleClick(index)}
                    ></div>
                ))}
            </div>
            <button className="reset-button" onClick={resetGrid}>Reset</button>
        </div>
    )
}

export default Matrix;