import { News, SendData, User } from '../types';

import { fetchNews } from './fetchNews';
import api from './api';
import { getUser } from './getUser';
import { register } from './register';
import { loginAuth } from './loginAuth';
import { verify } from './verify';


const mockUsers: User[] = [
  {
    id: 1,
    login: 'user1',
    email: '5o9aM@example.com',
    avatarPath: 'path/to/avatar1.jpg',
    updatedAt: new Date(),
    createdAt: new Date().toDateString(),
    news: [] as News[]
  },
  {
    id: 2,
    login: 'user2',
    email: 'user2@example.com',
    avatarPath: 'path/to/avatar2.jpg',
    updatedAt: new Date(),
    createdAt: new Date().toDateString(),
    news: [] as News[]
  }
];

const mockNews: News[] = [
  {
    id: 1,
    header: 'News 1',
    userId: 1,
    imagePath: 'path/to/image1.jpg',
    text: 'This is news 1',
    createdAt: new Date(),
    updatedAt: new Date(),
    user: mockUsers[0],
    tags: []
  },
  {
    id: 2,
    header: 'News 2',
    userId: 2,
    imagePath: 'path/to/image2.jpg',
    text: 'This is news 2',
    createdAt: new Date(),
    updatedAt: new Date(),
    user: mockUsers[1],
    tags: []
  }
];

const mockSendData: SendData = {
  email: mockUsers[0].email,
  login: mockUsers[0].login,
  password: '123456'
};


function createFakeApi ()  {
  const mockApi = {
    get: jest.fn(),
    post: jest.fn()
  };

 
  mockApi.get.mockImplementation((url: string) => {
  
    if (url.startsWith('users/')) {
      const userId = Number(url.split('/')[1]);
      const user = mockUsers.find(u => u.id === userId);
      return user ? Promise.resolve(user) : Promise.reject('User not found');
    }

    
    else if (url === 'news') {
      return Promise.resolve(mockNews);
    }
    else if ( url === 'auth/verify') {
      return Promise.resolve({
        user: {
          login: mockUsers[0].login,
          email: mockUsers[0].email,
          id: mockUsers[0].id,
          news: [],
          createdAt: mockUsers[0].createdAt,
          updatedAt: mockUsers[0].updatedAt,
          avatarPath: mockUsers[0].avatarPath
        },
        token: 'token'
      });
    }

    return Promise.reject('Invalid URL');
  });

  mockApi.post.mockImplementation((url: string, data: any) => {
 
    if (url === 'register/') {
      const foundUser = mockUsers.find(user => user.email === data.email);
      if (foundUser) {
        return Promise.reject('User already exists');
      }
      return Promise.resolve({
        user: {
          login: data.login,
          email: data.email,
          id: mockUsers.length + 1,
          news: [],
          createdAt: new Date(),
          updatedAt: new Date(),
          avatarPath: ''
        },
        token: 'token'
      });
    }
    else if (url === 'auth/login') {
      const fondedUser = mockUsers.find(user => (user.login === data.login));
      if (fondedUser) {
        return Promise.resolve({ user: fondedUser, token: 'token' });
      } else {
        return Promise.reject(new Error('User not found'));
      }
    }

    return Promise.reject('Invalid URL');
  });

  return mockApi;
}


jest.mock('./api', () => ({
  __esModule: true,
  default: createFakeApi()
}));


describe('fetchNews', () => {
  it('should fetch news successfully', async () => {
    const result = await fetchNews();
    expect(api.get).toHaveBeenCalledWith('news');
    expect(result).toEqual(mockNews);
  });
});

describe('getUser', () => {
  it('should fetch user successfully', async () => {
    const userId = '1';
    const result = await getUser(userId);
    expect(api.get).toHaveBeenCalledWith(`users/${userId}`);
    expect(result).toEqual(mockUsers[0]);
  });

  it('should throw an error if user is not found', async () => {
    const userId = '999';
    await expect(getUser(userId)).rejects.toBe('User not found');
  });
});

describe('register', () => {
  it('should register user successfully', async () => {
    const user: SendData = {
      email: 'newuser@mail.ru',
      login: 'newuser',
      password: '123456'
    };

    const result = await register(user);
    
    expect(api.post).toHaveBeenCalledWith('register/', user);
    
    expect(result).toEqual({
      user: {
        login: user.login,
        email: user.email,
        id: mockUsers.length + 1,
        news: [],
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
        avatarPath: ''
      },
      token: 'token'
    });
  });

  it('should throw an error if registration fails', async () => {
    await expect(register(mockSendData)).rejects.toBe('User already exists');
  });
});

describe('verify', () => {
  it('should verify user successfully', async () => {
    const user = { user: mockUsers[0], token: 'token' };
  
    const result = await verify();
  
    expect(api.get).toHaveBeenCalledWith('auth/verify'); 
    expect(result).toEqual(user);
  });
});

describe('loginAuth', ()=> {
  it('should login user successfully', async () => {
    const user = { user: mockUsers[0], token: 'token' };
  
    const result = await loginAuth (mockSendData);
  
    expect(api.post).toHaveBeenCalledWith('auth/login', mockSendData); 
    expect(result).toEqual(user);
  });
});
