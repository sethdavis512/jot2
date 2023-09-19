// seed.ts
import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function seedDatabase() {
    try {
        // Read the JSON data file
        const data = await fs.readFile('prisma/data.json', 'utf-8');
        const jsonData = JSON.parse(data);

        // Create users from the JSON dataset
        for (const userData of jsonData.users) {
            await prisma.user.create({
                data: {
                    email: faker.internet.email(),
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    name: `${userData.firstName} ${userData.lastName}`
                    // Add more user-related fields here
                }
            });
        }

        // Create documents from the JSON dataset
        for (const documentData of jsonData.documents) {
            await prisma.document.create({
                data: {
                    name: documentData.name,
                    history: documentData.history,
                    tags: {
                        create: documentData.tags.map((tagName: string) => ({
                            name: tagName
                        }))
                    }
                    // Add more document-related fields here
                }
            });
        }

        // Create blocks from the JSON dataset
        for (const blockData of jsonData.blocks) {
            await prisma.block.create({
                data: {
                    name: blockData.name,
                    history: blockData.history,
                    tags: {
                        create: blockData.tags.map((tagName: string) => ({
                            name: tagName
                        }))
                    }
                    // Add more block-related fields here
                }
            });
        }

        // Create tags from the JSON dataset
        for (const tagData of jsonData.tags) {
            await prisma.tag.create({
                data: {
                    name: tagData.name,
                    history: tagData.history
                    // Add more tag-related fields here
                }
            });
        }

        // Create categories from the JSON dataset
        for (const categoryData of jsonData.categories) {
            await prisma.category.create({
                data: {
                    name: categoryData.name,
                    history: categoryData.history
                    // Add more category-related fields here
                }
            });
        }

        // Create events from the JSON dataset
        for (const eventData of jsonData.events) {
            await prisma.event.create({
                data: {
                    name: eventData.name,
                    history: eventData.history,
                    start: new Date(),
                    end: new Date()
                    // Add more event-related fields here
                }
            });
        }

        // Create tasks from the JSON dataset
        for (const taskData of jsonData.tasks) {
            await prisma.task.create({
                data: {
                    name: taskData.name,
                    history: taskData.history
                    // Add more task-related fields here
                }
            });
        }

        // Create links from the JSON dataset
        for (const linkData of jsonData.links) {
            await prisma.link.create({
                data: {
                    name: linkData.name,
                    history: linkData.history,
                    url: linkData.url
                    // Add more link-related fields here
                }
            });
        }

        // Create persons from the JSON dataset
        for (const personData of jsonData.persons) {
            await prisma.person.create({
                data: {
                    name: personData.name,
                    history: personData.history,
                    firstName: faker.person.firstName(),
                    lastName: faker.person.lastName()
                    // Add more person-related fields here
                }
            });
        }

        console.log('Seed data successfully inserted!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seedDatabase();
