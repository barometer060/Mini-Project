import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddProductComponent } from "./add-product/add-product.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "add", component: AddProductComponent },
	{ path: "home", redirectTo: "", pathMatch: "full" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
