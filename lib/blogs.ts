import { Blog } from "@/types";

// This is a mock database. In a real application, you would fetch this data from an API or database.
const blogs: Blog[] = [
    {
        id: '2',
        title: 'What Specs Do I Need to Play GTA 6?',
        description: 'Find out the minimum and recommended PC requirements to run GTA 6 smoothly and discover the best MODEX PCs for the job.',
        slug: 'what-specs-do-i-need-to-play-gta-6',
        content: [
            {
                type: 'text',
                value: 'Grand Theft Auto VI (GTA 6) is one of the most anticipated games in recent years, with Rockstar Games promising an incredible open-world experience. But is your gaming rig ready to handle it? In this blog, we’ll explore the predicted system requirements and highlight the best MODEX gaming PCs to ensure you’re ready to dive in.'
            },
            {
                type: 'image',
                url: '/GTA-VI-article-image-illustration-2.webp',
                alt: 'GTA 6 Article Image',
                width: 1200,
                height: 800
            },
            {
                type: 'text',
                value: '**Predicted Minimum System Requirements**'
            },
            { type: 'text', value: '- **CPU:** Intel Core i5-6600K or AMD Ryzen 5 3600' },
            { type: 'text', value: '- **GPU:** NVIDIA GeForce GTX 1660 or AMD Radeon RX 580' },
            { type: 'text', value: '- **RAM:** 12GB' },
            { type: 'text', value: '- **Storage:** 150GB SSD' },
            { type: 'text', value: '- **OS:** Windows 10 64-bit' },
            {
                type: 'text',
                value: '**Predicted Recommended System Requirements**'
            },
            { type: 'text', value: '- **CPU:** Intel Core i7-8700K or AMD Ryzen 7 3700X' },
            { type: 'text', value: '- **GPU:** NVIDIA GeForce RTX 2080 SUPER or AMD Radeon RX 6800 XT' },
            { type: 'text', value: '- **RAM:** 16GB' },
            { type: 'text', value: '- **Storage:** 150GB NVMe SSD' },
            { type: 'text', value: '- **OS:** Windows 10 64-bit or Windows 11' },
            {
                type: 'text',
                value: 'For gamers aiming to play at ultra settings or 4K resolution, it’s recommended to upgrade to a high-end setup with 32GB of RAM and a top-tier GPU like the NVIDIA RTX 4080 or AMD Radeon RX 7900 XT.'
            },
            {
                type: 'text',
                value: '**Best MODEX Gaming PCs for GTA 6**'
            },
            {
                type: 'text',
                value: 'MODEX offers powerful gaming PCs that exceed these requirements, ensuring a smooth and immersive experience for GTA 6. Here are our top picks:'
            },
            {
                type: 'computer',
                value: 'a19cfc9b-11b8-469a-a3bd-5f8374e5270e'
            },
            {
                type: 'computer',
                value: '7c276f07-7f36-4bd2-9fb4-f41b2bc80a95'
            },
            {
                type: 'computer',
                value: '31d361ce-ead0-4e95-a75a-1b3b656136a1'
            },
            {
                type: 'text',
                value: 'Prepare for the ultimate GTA 6 experience with MODEX Gaming PCs. Visit our website to explore more options and customize your perfect gaming rig today!'
            }
        ],
        tags: ['gaming', 'GTA 6', 'PC specs', 'gaming PC', 'MODEX'],
        computer: [
            'a19cfc9b-11b8-469a-a3bd-5f8374e5270e',
            '7c276f07-7f36-4bd2-9fb4-f41b2bc80a95',
            '31d361ce-ead0-4e95-a75a-1b3b656136a1'
        ],
        createdAt: '2025-01-06',
        updatedAt: '2025-01-06'
    }
];



export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
    return blogs.find(blog => blog.slug === slug);
}

export async function getAllBlogSlugs(): Promise<Blog[]> {
    return blogs;
}