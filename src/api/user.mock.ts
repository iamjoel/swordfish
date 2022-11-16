import Mock from 'mockjs';
import {successResponseWrap, failResponseWrap} from '@/mock/response'

const userList = [
    {
        id: 1,
        name: 'Joel',
        username: 'admin',
        password: '1',
        role: 'admin'
    },
    {
        id: 2,
        name: 'Rick',
        username: 'staff',
        password: '1',
        role: 'user'
    }
]

// login
Mock.mock(new RegExp('/api/user/login'), (params: MockParams) => {
    const { username, password } = JSON.parse(params.body);
    if (!username) {
    return failResponseWrap(null, '用户名不能为空', 50000);
    }
    if (!password) {
    return failResponseWrap(null, '密码不能为空', 50000);
    }
    const user = userList.find(item => item.username === username && item.password === password)
    if (user) {
        return successResponseWrap({
            token: Math.round(Math.random() * 100000) + '',
            ...user,
            password: '****',
        });
    }
    // window.localStorage.setItem('userRole', 'user');
    return failResponseWrap(null, '账号或者密码错误', 50000);
});

