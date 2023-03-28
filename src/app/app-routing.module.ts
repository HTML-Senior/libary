import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { FavouritesComponent } from "./pages/favourites/favourites.component";
import { ProfileComponent } from "./pages/profile/profile.component";


const routes: Routes = [
	{ path: 'about', component: AboutComponent },
	{ path: 'catalog', component: CatalogComponent },
	{ path: 'favorites', component: FavouritesComponent },
	{ path: 'profile', component: ProfileComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }