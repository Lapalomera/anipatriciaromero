import {Component } from '@angular/core';
import {Product,Publication} from '../../interface/product';



@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent {


   constructor(){
  
   }   

arepa:Product[]=[
    {
      name:'La Coronada',
      ingredients:['Mezcla de Pollo','Tajada','Queso Amarillo'],
      img:"/anipatriciaromero/assets/img/arepa/paloma1.JPEG",
    },
    {
      name:'La Catira',
      ingredients:['Pollo Mechado','Queso Amarillo'],
      img:"assets/img/arepa/paloma2.JPEG",
    },
    {
      name:'La Pelua',
      ingredients:['Carne Mechada','Queso Amarillo'],
      img:"assets/img/arepa/paloma3.JPEG",
    },
    {
      name:'La Sifrina',
      ingredients:['Queso Amarillo','Jamon'],
      img:"assets/img/arepa/paloma4.JPEG",
    },
    {
      name:'Domino',
      ingredients:['Caraota','Platano','Queso'],
      img:"assets/img/arepa/paloma5.JPEG",
    },
    {
      name:'La Capresa',
      ingredients:['Tomate','Oregano','Queso Mozzarela'],
      img:"assets/img/arepa/paloma6.JPEG",
    },
    {
      name:'La Pecadora',
      ingredients:['Diablito','Tomate','Tajada','Huevo','Queso'],
      img:"assets/img/arepa/paloma7.JPEG",
    },
    {
      name:'La Tunning',
      ingredients:['Arun','Tomate','Aguacate'],
      img:"assets/img/arepa/paloma8.JPEG",
    }
    
   ];

   publication:Publication[]=[
   {
    title:'San Valentin',
    description:'Enamora a tu Pareja con un Desayuno',
    img:"assets/img/news/san_valentin.JPEG"
   },
   {
    title:'Serie del Caribe',
    description:'Botala de Home Run como Jose Rondon para ganarte una palomera',
    img:"assets/img/news/serie_caribe.JPEG"
   },{
    title:'Claramente la Palomera es lo mejor',
    description:'la palomera ya no llora la palomera factura',
    img:"assets/img/news/claramente.JPEG"
   }
  ];
   
   
}



 



