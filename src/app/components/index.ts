import { SignatureComponent } from './signature/signature.component';
import { ArticleComponent } from './article/article.component';
import { HorizontalLayoutComponent } from './horizontal-layout/horizontal-layout.component';
import { VerticalLayoutComponent } from './vertical-layout/vertical-layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationItemComponent } from './navigation/navigation-item/navigation-item.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PageComponent } from './page/page.component';

export const components = [
  ArticleComponent,
  HorizontalLayoutComponent,
  VerticalLayoutComponent,
  NavigationComponent,
  NavigationItemComponent,
  LoginFormComponent,
  SignatureComponent,
  PageComponent
];

export const componentList = {
  'ArticleComponent': ArticleComponent,
  'HorizontalLayoutComponent': HorizontalLayoutComponent,
  'VerticalLayoutComponent': VerticalLayoutComponent,
  'NavigationComponent': NavigationComponent,
  'NavigationItemComponent': NavigationItemComponent,
  'LoginFormComponent': LoginFormComponent,
  'SignatureComponent': SignatureComponent,
  'PageComponent': PageComponent,
};
