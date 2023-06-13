const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const topics = [
  {
    id: 1,
    category: "Mission",
    title:
      "The Importance of Establishing a Strong Online Presence for Small Businesses",
    tags: [
      "online presence",
      "small businesses",
      "digital marketing",
      "branding",
    ],
  },
  {
    id: 2,
    category: "Mission",
    title:
      "How fast turnaround times in Logo and Website Design benefit your business",
    tags: ["fast turnaround", "logo design", "website design", "branding"],
  },
  {
    id: 3,
    category: "Mission",
    title: "Affordable Branding solutions for Startups and Entrepreneurs",
    tags: [
      "affordable branding",
      "startups",
      "entrepreneurs",
      "website design",
      "logo design",
    ],
  },
  {
    id: 4,
    category: "Mission",
    title:
      "The Importance of Establishing a Strong Online Presence for Small Businesses",
    tags: [
      "online presence",
      "small businesses",
      "digital marketing",
      "branding",
    ],
  },
  {
    id: 5,
    category: "Mission",
    title:
      "The Benefits of Comprehensive Branding Services for Small to Medium Sized Businesses",
    tags: [
      "comprehensive branding",
      "small businesses",
      "logo design",
      "website design",
      "social media management",
    ],
  },
  {
    id: 6,
    category: "Mission",
    title:
      "Expert tips for choosing the right digital marketing agency for your business",
    tags: [
      "digital marketing agency",
      "tips",
      "website design",
      "social media management",
    ],
  },
  {
    id: 7,
    category: "Custom",
    title: "Learn about ChatGpt",
    tags: ["ai", " marketing"],
  },
  {
    id: 8,
    category: "Custom",
    title: "AI and Marketing .... The Future",
    tags: ["ai", " marketing", " small business"],
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const { title, category, tags } of topics) {
    const user = await prisma.topic.create({
      data: {
        title,
        category,
        tags: tags.join(","),
      },
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
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
