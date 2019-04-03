import axios,{
    AxiosResponse,
    AxiosError
  } from "../../node_modules/axios/index"
  import { Icoin} from "./coins";
  let Contentelement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
  let GetAllCoinsButton :HTMLButtonElement = <HTMLButtonElement> document.getElementById("GetAllButton")
  
  GetAllCoinsButton.addEventListener('click', showAllcoins)
  
  let AddcoinsButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("addbutton")
  AddcoinsButton.addEventListener("click", addcoin);
  function addcoin(): void{
      let addcoinselement: HTMLInputElement = <HTMLInputElement> document.getElementById("addcoin");
          let mycoin: string = addcoinselement.value;
          let mybud: int = addbudelement.value;
          let mynavn: string = addnavnelement.value;