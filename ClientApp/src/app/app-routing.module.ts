import { ExperiencePageComponent } from "./Components/experience-page/experience-page.component";
import { BasicInfoComponent } from "./Components/basic-info/basic-info.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizeGuard } from "src/api-authorization/authorize.guard";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: BasicInfoComponent, pathMatch: "full" },
  { path: "basicinfo", component: BasicInfoComponent },
  { path: "experience", component: ExperiencePageComponent },
  { path: "counter", component: HomeComponent },
  {
    path: "fetch-data",
    component: FetchDataComponent,
    canActivate: [AuthorizeGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
