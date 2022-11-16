import type { Router, LocationQueryRaw } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import { APP_NAME } from '@/config'
import { isLogin } from '@/utils/auth';

export default function setupUserLoginInfoGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();
    if (isLogin()) {
      next();
      const title = to.meta?.title || APP_NAME
      window.document.title = title as string
    } else {
      if (to.name === 'login') {
        window.document.title = 'Login'
        next();
        return;
      }
      next({
        name: 'login',
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      });
    }
  });
}
