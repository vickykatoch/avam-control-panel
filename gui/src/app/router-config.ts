import { UserAdminComponent } from "./modules/user-admin";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LogDashboardComponent } from "./modules/log-analyzer";
import { WorkspaceComponent } from "./modules/user-config";

const indexRoute = {
    path: '',
    component: DashboardComponent
};
const fallbackRoute = {
    path: '**',
    component: DashboardComponent
};

export const routeConfig = [
    {
        path: 'home',
        component: DashboardComponent
    },
    {
        path: 'useradmin',
        component: UserAdminComponent
    },
    {
        path: 'loganalyzer',
        component: LogDashboardComponent
    },
    {
        path : 'userconfig',
        component : WorkspaceComponent
    },
    indexRoute,
    fallbackRoute
];