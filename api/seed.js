import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding diverse Airbnb-style dataset...');
  
  // Clear existing data to avoid duplicates if running multiple times? 
  // For safety, let's just add to it.

  // Create a dummy user for the new posts
  const hashedPassword = await bcrypt.hash('host123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'host@airbnb.com' },
    update: {},
    create: {
      email: 'host@airbnb.com',
      username: 'SuperHost',
      password: hashedPassword,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  });

  const posts = [
    {
      title: 'Stunning Loft in Downtown NY',
      price: 3500,
      images: ['https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
      address: 'Manhattan',
      city: 'New York',
      bedroom: 2,
      bathroom: 2,
      latitude: '40.7128',
      longitude: '-74.0060',
      type: 'rent',
      property: 'condo',
      userId: user.id,
      postDetail: { create: { desc: 'Experience NY like a local. Exposed brick walls, high ceilings, walking distance to subway.', utilities: 'Tenant', pet: 'allowed', income: '3x', size: 1200, school: 500, bus: 100, restaurant: 50 } }
    },
    {
      title: 'Sunny Beachfront Villa',
      price: 1200000,
      images: ['https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
      address: 'Malibu Beach',
      city: 'Los Angeles',
      bedroom: 5,
      bathroom: 4,
      latitude: '34.0259',
      longitude: '-118.7798',
      type: 'buy',
      property: 'house',
      userId: user.id,
      postDetail: { create: { desc: 'A stunning beachfront property with private access to the sand. Includes a pool and home theater.', utilities: 'Owner', pet: 'allowed', income: 'N/A', size: 4500, school: 3000, bus: 5000, restaurant: 200 } }
    },
    {
      title: 'Historic Apartment in Paris',
      price: 2200,
      images: ['https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
      address: 'Le Marais',
      city: 'Paris',
      bedroom: 1,
      bathroom: 1,
      latitude: '48.8566',
      longitude: '2.3522',
      type: 'rent',
      property: 'apartment',
      userId: user.id,
      postDetail: { create: { desc: 'Charming 19th-century apartment in the heart of Paris. Romantic balcony views.', utilities: 'Tenant', pet: 'not allowed', income: '2.5x', size: 600, school: 800, bus: 200, restaurant: 10 } }
    },
    {
      title: 'Modern Cabin in the Woods',
      price: 450000,
      images: ['https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
      address: 'Pine Forest',
      city: 'Seattle',
      bedroom: 3,
      bathroom: 2,
      latitude: '47.6062',
      longitude: '-122.3321',
      type: 'buy',
      property: 'house',
      userId: user.id,
      postDetail: { create: { desc: 'A perfect getaway surrounded by nature. Eco-friendly modern design with floor-to-ceiling windows.', utilities: 'Owner', pet: 'allowed', income: 'N/A', size: 1800, school: 12000, bus: 8000, restaurant: 5000 } }
    },
    {
      title: 'Minimalist Tokyo Studio',
      price: 1100,
      images: ['https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
      address: 'Shibuya',
      city: 'Tokyo',
      bedroom: 1,
      bathroom: 1,
      latitude: '35.6762',
      longitude: '139.6503',
      type: 'rent',
      property: 'apartment',
      userId: user.id,
      postDetail: { create: { desc: 'Compact, high-tech living in the center of Tokyo. 2 minutes from the station.', utilities: 'Included', pet: 'not allowed', income: '3x', size: 300, school: 400, bus: 100, restaurant: 5 } }
    },
    {
      title: 'Penthouse with Skyline View',
      price: 5000000,
      images: ['https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
      address: 'Downtown',
      city: 'Dubai',
      bedroom: 4,
      bathroom: 5,
      latitude: '25.2048',
      longitude: '55.2708',
      type: 'buy',
      property: 'condo',
      userId: user.id,
      postDetail: { create: { desc: 'Ultra-luxury penthouse with private elevator, infinity pool, and panoramic views of the Burj Khalifa.', utilities: 'Owner', pet: 'allowed', income: 'N/A', size: 6000, school: 2000, bus: 500, restaurant: 10 } }
    },
    {
      title: 'Cozy London Flat',
      price: 1800,
      images: ['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
      address: 'Camden Town',
      city: 'London',
      bedroom: 2,
      bathroom: 1,
      latitude: '51.5074',
      longitude: '-0.1278',
      type: 'rent',
      property: 'apartment',
      userId: user.id,
      postDetail: { create: { desc: 'Live in the vibrant Camden area. Hardwood floors, brick fireplaces, recently renovated.', utilities: 'Tenant', pet: 'allowed', income: '3x', size: 750, school: 1000, bus: 50, restaurant: 20 } }
    },
    {
      title: 'Sprawling Country Estate',
      price: 850000,
      images: ['https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
      address: 'Countryside',
      city: 'Tuscany',
      bedroom: 6,
      bathroom: 4,
      latitude: '43.7711',
      longitude: '11.2486',
      type: 'buy',
      property: 'land',
      userId: user.id,
      postDetail: { create: { desc: 'Vast vineyard and olive grove estate in Tuscany. Perfect for a boutique hotel or family retreat.', utilities: 'Owner', pet: 'allowed', income: 'N/A', size: 25000, school: 15000, bus: 20000, restaurant: 8000 } }
    }
  ];

  for (const post of posts) {
    const createdPost = await prisma.post.create({
      data: post,
    });
    console.log(`Created post with id: ${createdPost.id}`);
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
