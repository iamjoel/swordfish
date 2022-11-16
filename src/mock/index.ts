import Mock from 'mockjs';

import '@/api/user.mock'
import '@/api/fish.mock'

Mock.setup({
  timeout: '600-1000',
});
