import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';

const routes: VexRoutes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/pages/auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/pages/auth/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },
  
  {
    path: 'coming-soon',
    loadChildren: () => import('./pages/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  },
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      {
        path: 'dashboards/analytics',
        redirectTo: '/'
      },
      {
        path: '',
        loadChildren: () => import('./pages/dashboards/dashboard-analytics/dashboard-analytics.module').then(m => m.DashboardAnalyticsModule),
      },
      {
        path: 'apps',
        children: [
          {
            path: 'chat',
            loadChildren: () => import('./pages/apps/chat/chat.module').then(m => m.ChatModule),
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'mail',
            loadChildren: () => import('./pages/apps/mail/mail.module').then(m => m.MailModule),
            data: {
              toolbarShadowEnabled: true,
              scrollDisabled: true
            }
          },
          {
            path: 'social',
            loadChildren: () => import('./pages/apps/social/social.module').then(m => m.SocialModule)
          },
          {
            path: 'contacts',
            loadChildren: () => import('./pages/apps/contacts/contacts.module').then(m => m.ContactsModule)
          },
          {
            path: 'calendar',
            loadChildren: () => import('./pages/apps/calendar/calendar.module').then(m => m.CalendarModule),
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'aio-table',
            loadChildren: () => import('./pages/apps/aio-table/aio-table.module').then(m => m.AioTableModule),
          },
		   {
            path: 'invoice-table',
            loadChildren: () => import('./pages/apps/invoice-table/invoice-table.module').then(m => m.InvoiceTableModule),
          },
		  		   {
            path: 'topup-table',
            loadChildren: () => import('./pages/apps/topup-table/topup-table.module').then(m => m.TopupTableModule),
          },
		  


          {
            path: 'cancelbill',
            loadChildren: () => import('./pages/apps/cancelbill/cancelbill.module').then(m => m.CancelbillModule),
          },
		  	 	   {
            path: 'customerdiscount',
            loadChildren: () => import('./pages/apps/customerdiscount/customerdiscount.module').then(m => m.CustomerDiscountModule),
          },
		  	 	   {
            path: 'promocode',
            loadChildren: () => import('./pages/apps/promocode/promocode.module').then(m => m.PromocodeModule),
          },

		  	 	   {
            path: 'category',
            loadChildren: () => import('./pages/apps/category/category.module').then(m => m.CategoryModule),
          },
		  	 	   {
            path: 'garmets',
            loadChildren: () => import('./pages/apps/garmets/garmets.module').then(m => m.GarmetsModule),
          },
		  	 	   {
            path: 'service',
            loadChildren: () => import('./pages/apps/service/service.module').then(m => m.ServiceModule),
          },
		 	   {
            path: 'store',
            loadChildren: () => import('./pages/apps/store/store.module').then(m => m.StoreModule),
          },
          {
            path: 'factory',
            loadChildren: () => import('./pages/apps/factory/factory.module').then(m => m.FactoryModule),
          },
          {
            path: 'users',
            loadChildren: () => import('./pages/apps/users/users.module').then(m => m.UsersModule),
          },
          {
            path: 'pins-table',
            loadChildren: () => import('./pages/apps/pins-table/pins-table.module').then(m => m.PinsTableModule),
          },
		  
		  	   {
            path: 'pinrequest-table',
            loadChildren: () => import('./pages/apps/pinrequest-table/pinrequest-table.module').then(m => m.PinrequestTableModule),
          },
		    	
		{
            path: 'payout-table',
            loadChildren: () => import('./pages/apps/payout-table/payout-table.module').then(m => m.payoutTableModule),
          },
		  {
            path: 'wallettransaction-table',
            loadChildren: () => import('./pages/apps/wallettransaction-table/wallettransaction-table.module').then(m => m.WallettransactionTableModule),
          },
		    {
            path: 'mydirects-table',
            loadChildren: () => import('./pages/apps/mydirects-table/mydirects-table.module').then(m => m.MydirectsTableModule),
          },
		  
		  	 
		    {
            path: 'mydownline-table',
            loadChildren: () => import('./pages/apps/mydownline-table/mydownline-table.module').then(m => m.MydownlineTableModule),
          },
		  
		  
		     {
            path: 'bankingpartner-table',
            loadChildren: () => import('./pages/apps/bankingpartner-table/bankingpartner-table.module').then(m => m.BankingpartnerTableModule),
          },
		  
		  
		   
		     {
            path: 'support-table',
            loadChildren: () => import('./pages/apps/support-table/support-table.module').then(m => m.SupportTableModule),
          },
		  
          {
            path: 'help-center',
            loadChildren: () => import('./pages/apps/help-center/help-center.module').then(m => m.HelpCenterModule),
          },
          {
            path: 'scrumboard',
            loadChildren: () => import('./pages/apps/scrumboard/scrumboard.module').then(m => m.ScrumboardModule),
          },
          {
            path: 'editor',
            loadChildren: () => import('./pages/apps/editor/editor.module').then(m => m.EditorModule),
          },
        ]
      },
      {
        path: 'pages',
        children: [
          {
            path: 'pricing',
            loadChildren: () => import('./pages/pages/pricing/pricing.module').then(m => m.PricingModule)
          },
          {
            path: 'faq',
            loadChildren: () => import('./pages/pages/faq/faq.module').then(m => m.FaqModule)
          },
          {
            path: 'guides',
            loadChildren: () => import('./pages/pages/guides/guides.module').then(m => m.GuidesModule)
          },
          {
            path: 'invoice',
            loadChildren: () => import('./pages/pages/invoice/invoice.module').then(m => m.InvoiceModule)
          },
          {
            path: 'error-404',
            loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
          },
		     {
            path: 'profile',
            loadChildren: () => import('./pages/pages/profile/profile.module').then(m => m.ProfileModule)
          },
		    {
            path: 'createpinrequest',
            loadChildren: () => import('./pages/pages/createpinrequest/createpinrequest.module').then(m => m.CreatepinrequestModule)
          },
		    {
            path: 'kyc',
            loadChildren: () => import('./pages/pages/kyc/kyc.module').then(m => m.KycModule)
          },
          {
            path: 'error-500',
            loadChildren: () => import('./pages/pages/errors/error-500/error-500.module').then(m => m.Error500Module)
          }
        ]
      },
      {
        path: 'ui',
        children: [
          {
            path: 'components',
            loadChildren: () => import('./pages/ui/components/components.module').then(m => m.ComponentsModule),
          },
          {
            path: 'forms/form-elements',
            loadChildren: () => import('./pages/ui/forms/form-elements/form-elements.module').then(m => m.FormElementsModule),
            data: {
              containerEnabled: true
            }
          },
          {
            path: 'forms/form-wizard',
            loadChildren: () => import('./pages/ui/forms/form-wizard/form-wizard.module').then(m => m.FormWizardModule),
            data: {
              containerEnabled: true
            }
          },
          {
            path: 'icons',
            loadChildren: () => import('./pages/ui/icons/icons.module').then(m => m.IconsModule)
          },
          {
            path: 'page-layouts',
            loadChildren: () => import('./pages/ui/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule),
          },
        ]
      },
      {
        path: 'documentation',
        loadChildren: () => import('./pages/documentation/documentation.module').then(m => m.DocumentationModule),
      },
      {
        path: '**',
        loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
