
import { News, SendData, User } from '../types';

import { fetchNews } from './fetchNews';
import api from './api';
import { getUser } from './getUser';
import { register } from './register';




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
    login: 'user1',
    email: '5o9aM@example.com',
    avatarPath: 'path/to/avatar1.jpg',
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
    header: 'News 1',
    userId: 1,
    imagePath: 'path/to/image1.jpg',
    text: 'This is news 1',
    createdAt: new Date(),
    updatedAt: new Date(),
    user: mockUsers[1],
    tags: []
  }
];

jest.mock('./api', () => ({ get: jest.fn(), post: jest.fn() }));

describe('fetchNews', () => {
  it('should fetch news successfully', async () => {
    // Mock data

    (api.get as jest.Mock).mockResolvedValue(mockNews);

    const result = await fetchNews();
  
    expect(api.get).toHaveBeenCalledWith('news'); 
    expect(result).toEqual(mockNews); 
  });
});


describe('getUser', () => {
  it('should fetch user successfully', async () => {
    const userId = '1';
  
    (api.get as jest.Mock).mockResolvedValue(mockUsers[0]);
  
    const result = await getUser(userId);
  
    expect(api.get).toHaveBeenCalledWith(`users/${userId}`); 
    expect(result).toEqual(mockUsers[0]); 
  });
  it('should throw an error if user is not found', async () => {
    const userId = '999';
  
    (api.get as jest.Mock).mockRejectedValue('User not found');
  
    expect(getUser(userId)).rejects.toBe('User not found'); 
  });
});

const mockSendData: SendData = {
  email: mockUsers[0].email,
  login: mockUsers[0].login,
  password: '123456'
};

describe('register', () => {
  it('should register user successfully', async () => {

    const user = { user: mockUsers[0], token: 'token' };

    (api.post as jest.Mock).mockResolvedValue(user);
  
    const result = await register(mockSendData);
  
    expect(api.post).toHaveBeenCalledWith('register/', mockSendData); 
    expect(result).toEqual(user);
  });

  it('should throw an error if registration fails', async () => {
    const error = 'Registration failed';
  
    (api.post as jest.Mock).mockRejectedValue(error);
  
    expect(register(mockSendData)).rejects.toBe(error); 
  });

});
