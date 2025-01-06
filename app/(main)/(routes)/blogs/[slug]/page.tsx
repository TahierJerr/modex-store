import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Container from '@/components/ui/container';
import { getBlogBySlug, getAllBlogSlugs } from '@/lib/blogs';
import { EditIcon } from 'lucide-react';
import Link from 'next/link';
import getComputer from '@/actions/get-computer';
import { Computer } from '@/types';
import Image from 'next/image';
import ComputerList from '../components/computerList';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const blog = await getBlogBySlug(params.slug);
    
    if (!blog) {
        return {
            title: 'Blog Not Found',
        };
    }
    
    return {
        title: blog.title,
        description: blog.content.find(block => block.type === 'text')?.value || '',
        openGraph: {
            title: blog.title,
            description: blog.content.find(block => block.type === 'text')?.value || '',
            type: 'article',
            publishedTime: blog.createdAt,
        },
        authors: [{ name: "MODEX", url: "https://modexgaming.com" }],
        publisher: "MODEX",
        keywords: blog.tags?.join(', '),
        category: blog.tags?.join(', '),
    };
}

export async function generateStaticParams() {
    const blogs = await getAllBlogSlugs();
    
    if (!Array.isArray(blogs)) {
        throw new Error('Expected getAllBlogSlugs to return an array of Blog objects');
    }
    
    return blogs.map((blog) => ({
        slug: blog.slug, // Extract slug from Blog object
    }));
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    const blog = await getBlogBySlug(params.slug);
    
    
    if (!blog) {
        notFound();
    }
    
    let computers: Computer[] = [];
    
    if (blog.computer) {
        computers = await Promise.all(blog.computer.map((id) => getComputer(id)));
    }
    
    // If blog has been updated not on the same day, set the updated time
    const editedOn = () => {
        if (new Date(blog.updatedAt).toLocaleDateString() !== new Date(blog.createdAt).toLocaleDateString()) {
            return `${<EditIcon size={22} />}Edited on ${new Date(blog.updatedAt).toLocaleDateString()}`;
        }
        return '';
    }
    
    
    return (
    <main className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24 lg:py-24 xl:py-32 sm:flex block sm:justify-center sm:items-center mx-auto ">
        
        <Container>
            <article className="max-w-3xl mx-auto prose prose-lg">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{blog.title}</h1>
                {blog.content.map((block, index) => {
                    const value = block.value ?? ''; // Ensure the value is not undefined
                    
                    switch (block.type) {
                        case 'text':
                        // Handle Markdown-style text formatting
                        const formattedText = value
                        .split('\n') // Split into lines
                        .map((line, lineIndex) => {
                            if (line.startsWith('-')) {
                                return (
                                <ul key={`ul-${index}-${lineIndex}`} className="list-disc list-inside mb-2">
                                    <li>{line.slice(1).trim()}</li>
                                </ul>
                                );
                            }
                            if (line.startsWith('###')) {
                                return <h3 key={`h3-${index}-${lineIndex}`} className="text-lg font-semibold mb-2">{line.slice(3).trim()}</h3>;
                            }
                            if (line.startsWith('##')) {
                                return <h2 key={`h2-${index}-${lineIndex}`} className="text-xl font-bold mb-4">{line.slice(2).trim()}</h2>;
                            }
                            if (line.startsWith('#')) {
                                return <h1 key={`h1-${index}-${lineIndex}`} className="text-2xl font-extrabold mb-6">{line.slice(1).trim()}</h1>;
                            }
                            
                            // Handle bold text within the line
                            const boldRegex = /\*\*(.*?)\*\*/g;
                            const parsedLine = line.split(boldRegex).map((part, partIndex) =>
                            boldRegex.test(`**${part}**`) ? (
                            <span key={`span-${index}-${lineIndex}-${partIndex}`}>{part}</span>
                            ) : (
                            <strong key={`bold-${index}-${lineIndex}-${partIndex}`}>{part}</strong>
                            )
                            );
                            
                            return <p key={`p-${index}-${lineIndex}`} className="mb-4">{parsedLine}</p>;
                        });
                        
                        return <div key={index}>{formattedText}</div>;
                        
                        case 'image':
                        return (
                        <Image
                        key={index}
                        src={block.url ?? ''}
                        alt={block.alt || ''}
                        width={block.width}
                        height={block.height}
                        className="w-full h-auto mb-6"
                        />
                        );
                        
                        default:
                        return null;
                    }
                })}
                <div className="mt-6">
                    <div className='flex flex-wrap gap-2'>
                    {blog.tags?.map(tag => (
                        <Link href={`/blogs?search=${tag}`} key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                            {tag}
                        </Link>
                        ))}
                        </div>
                        <div className='flex flex-wrap gap-2 mt-6 sm:hidden'>
                            <ComputerList computers={computers} />
                        </div>
                    </div>
                </article>
            </Container>
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Computers</h2>
                    <ComputerList computers={computers} />
            </div>
        </main>
        );
    }
    
    