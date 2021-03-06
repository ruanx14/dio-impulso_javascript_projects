import styled from "styled-components";
import {Heart,Eye} from "phosphor-react";

const DivProducts = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const DivAddCart = styled.div`  
    width: 100%;
    position: absolute;
    height: 0px;
    margin: 0 auto;
    background-color: #1a1a1a;
    transition: all 0.2s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    button{
        border: none;
        height: 40px;
        //width: 200px;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 20px;
        color: white;
        background-color: #fa1d1d;
        transition: all 0.2s;
        padding: 0 30px;
        position: relative;
    }
    button:hover{
        cursor: pointer;
        //width: 250px;
        color: red;
        background-color: white;
        border: 1px solid red;
        padding: 0px 30px 0px 50px;
    }
    button i{
        display: inline-block;
        position: absolute;
        top: 10px;
        left: 15px;
        width: 40px;
        height: 40px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s;
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyMHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCAyMCIgd2lkdGg9IjIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iIzAwMDAwMCIgaWQ9IkNvcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuMDAwMDAwLCAtNDIyLjAwMDAwMCkiPjxnIGlkPSJzaG9wcGluZy1jYXJ0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTIuMDAwMDAwLCA0MjIuMDAwMDAwKSI+PHBhdGggZD0iTTYsMTYgQzQuOSwxNiA0LDE2LjkgNCwxOCBDNCwxOS4xIDQuOSwyMCA2LDIwIEM3LjEsMjAgOCwxOS4xIDgsMTggQzgsMTYuOSA3LjEsMTYgNiwxNiBMNiwxNiBaIE0wLDAgTDAsMiBMMiwyIEw1LjYsOS42IEw0LjIsMTIgQzQuMSwxMi4zIDQsMTIuNyA0LDEzIEM0LDE0LjEgNC45LDE1IDYsMTUgTDE4LDE1IEwxOCwxMyBMNi40LDEzIEM2LjMsMTMgNi4yLDEyLjkgNi4yLDEyLjggTDYuMiwxMi43IEw3LjEsMTEgTDE0LjUsMTEgQzE1LjMsMTEgMTUuOSwxMC42IDE2LjIsMTAgTDE5LjgsMy41IEMyMCwzLjMgMjAsMy4yIDIwLDMgQzIwLDIuNCAxOS42LDIgMTksMiBMNC4yLDIgTDMuMywwIEwwLDAgTDAsMCBaIE0xNiwxNiBDMTQuOSwxNiAxNCwxNi45IDE0LDE4IEMxNCwxOS4xIDE0LjksMjAgMTYsMjAgQzE3LjEsMjAgMTgsMTkuMSAxOCwxOCBDMTgsMTYuOSAxNy4xLDE2IDE2LDE2IEwxNiwxNiBaIiBpZD0iU2hhcGUiLz48L2c+PC9nPjwvZz48L3N2Zz4=);    
        background-repeat: no-repeat;
        filter: invert(35%) sepia(85%) saturate(1442%) hue-rotate(335deg) brightness(100%) contrast(88%);
    }
    button:hover i{ 
        visibility: visible;
        opacity: 1;
    }

`;
const DivProduct = styled.article`
    margin-bottom: 90px;
    box-sizing: border-box;
    border: 1px solid grey;
    border-radius: 2px;
    width: 250px;
    height: 100%;
    position: relative;
    &:hover{
        border: none;
        box-shadow: 0px 0px 0px 2px #fa1d1d;
    }
    &:hover ${DivAddCart} {
        height: 80px;
    }
    @media screen and (max-width: 900px){
        width: 100%;
    }
`;
const DivInfoProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    img{
        width: 100%;
        height: 250px;
    }
    span{
        text-align: center;
    }
    span:nth-child(2){
       color: grey;
    }
    span:nth-child(3){
       color: #333333;
       font-weight: bolder;
       font-size: 1.2rem;
    }
    span:nth-child(4){
       color: #b41212;
       font-weight: bolder;
       border-bottom: 1px solid rgba(32,32,32,0.2);
    }
    span:nth-child(4) i{
        content: "";
        margin-left: 5px;
        color: grey;
        text-decoration: line-through;
    }
    span:nth-child(5){
        button{
            border: none;
            border-radius: 100%;
            padding: 5px;
            color: grey;
            position: relative;
        }
        button:hover{
            cursor: pointer;
            color: red;
            background-color: #ff000045;
        }
        button::after{
            content: "";
            position: absolute;
            top: -40px;
            left: 40px;
            z-index: 999;
            width: 90px;
            padding: 5px;
            background-color: #0e0e0ed4;
            color: white;
            text-transform: uppercase;
            display: none;
        }
        button:nth-child(1)::after{
            content:"Adicionar na lista de desejos";
        }
        button:nth-child(2)::after{
            content:"Visualizar item";
        }
        button:hover::after{
            display: block;
        }
    }
`;
const styleH2 = {
    color: '#424242'
}
interface ListProducts{
    titleList : string;
}
export function ListProducts(props : ListProducts){
    return(
        <>  
            <h2 style={styleH2}>{props.titleList}</h2>
            <DivProducts>
                <DivProduct>
                    <DivInfoProduct>
                        <img src="./src/assets/default.png" alt="product"></img>
                        <span>Category</span>
                        <span>Product Name goes Here</span>
                        <span>R$ 90 <i>R$ 100</i></span>
                        <span>
                            <button>
                                <Heart 
                                size={32}
                                /> 
                            </button>
                            <button>
                                <Eye 
                                size={32}
                                /> 
                            </button>
                        </span>
                    </DivInfoProduct>
                    <DivAddCart>
                        <button><i></i>Adicionar ao carrinho</button>
                    </DivAddCart>
                </DivProduct>
                <DivProduct>
                    <DivInfoProduct>
                        <img src="./src/assets/default.png" alt="product"></img>
                        <span>Category</span>
                        <span>Product Name goes Here</span>
                        <span>R$ 90 <i>R$ 100</i></span>
                        <span>
                            <button>
                                <Heart 
                                size={32}
                                /> 
                            </button>
                            <button>
                                <Eye 
                                size={32}
                                /> 
                            </button>
                        </span>
                    </DivInfoProduct>
                    <DivAddCart>
                        <button><i></i>Adicionar ao carrinho</button>
                    </DivAddCart>
                </DivProduct>
                <DivProduct>
                    <DivInfoProduct>
                        <img src="./src/assets/default.png" alt="product"></img>
                        <span>Category</span>
                        <span>Product Name goes Here</span>
                        <span>R$ 90 <i>R$ 100</i></span>
                        <span>
                            <button>
                                <Heart 
                                size={32}
                                /> 
                            </button>
                            <button>
                                <Eye 
                                size={32}
                                /> 
                            </button>
                        </span>
                    </DivInfoProduct>
                    <DivAddCart>
                        <button><i></i>Adicionar ao carrinho</button>
                    </DivAddCart>
                </DivProduct>
                <DivProduct>
                    <DivInfoProduct>
                        <img src="./src/assets/default.png" alt="product"></img>
                        <span>Category</span>
                        <span>Product Name goes Here</span>
                        <span>R$ 90 <i>R$ 100</i></span>
                        <span>
                            <button>
                                <Heart 
                                size={32}
                                /> 
                            </button>
                            <button>
                                <Eye 
                                size={32}
                                /> 
                            </button>
                        </span>
                    </DivInfoProduct>
                    <DivAddCart>
                        <button><i></i>Adicionar ao carrinho</button>
                    </DivAddCart>
                </DivProduct>
                <DivProduct>
                    <DivInfoProduct>
                        <img src="./src/assets/default.png" alt="product"></img>
                        <span>Category</span>
                        <span>Product Name goes Here</span>
                        <span>R$ 90 <i>R$ 100</i></span>
                        <span>
                            <button>
                                <Heart 
                                size={32}
                                /> 
                            </button>
                            <button>
                                <Eye 
                                size={32}
                                /> 
                            </button>
                        </span>
                    </DivInfoProduct>
                    <DivAddCart>
                        <button><i></i>Adicionar ao carrinho</button>
                    </DivAddCart>
                </DivProduct>
            </DivProducts>
        </>
    );
}