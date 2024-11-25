import { Routes } from '@angular/router';
import { AllProdectsComponent } from './prodects/components/all-prodects/all-prodects.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ProdectDetailsComponent } from './prodects/components/prodect-details/prodect-details.component';

export const routes: Routes = [
    {path:'products', component:AllProdectsComponent},
    {path:'cart',component:CartComponent},
    {path:'details',component:ProdectDetailsComponent},
    {path:'**',component:AllProdectsComponent,pathMatch:'full'}
    
];
