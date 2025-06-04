import type { Channel, SearchHistory, User, Video } from '@/types/mock';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
export const mockVideos: Video[] = Array.from({ length: 20 }, () => ({
  id: uuidv4(),
  title: faker.lorem.sentence({ min: 3, max: 8 }),
  thumbnail: faker.image.url({ width: 500, height: 180 }),
  channel: faker.person.firstName() + ' ' + faker.person.lastName(),
  views: faker.number.int({ min: 1000, max: 5000000 }),
  uploadedAt: faker.date.past({ years: 1 }).toISOString().split('T')[0],
  duration: `${faker.number.int({ min: 1, max: 59 })}:${faker.number.int({ min: 0, max: 59 }).toString().padStart(2, '0')}`,
}));
export const mockChannels: Channel[] = Array.from({ length: 10 }, () => ({
  id: uuidv4(),
  name: faker.company.name(),
  avatar: faker.image.avatar(),
  subscriberCount: faker.number.int({ min: 1000, max: 10000000 }),
}));

// Mock Search History
export const mockSearchHistory: SearchHistory[] = Array.from({ length: 10 }, () => ({
  id: uuidv4(),
  query: faker.lorem.words({ min: 1, max: 4 }),
  timestamp: faker.date.recent({ days: 30 }).toISOString(),
}));

// Mock Users
export const mockUsers: User[] = Array.from({ length: 5 }, () => ({
  id: `u${faker.number.int({ min: 1, max: 1000 })}`,
  name: faker.person.fullName(),
  avatar: faker.image.avatar(),
}));
