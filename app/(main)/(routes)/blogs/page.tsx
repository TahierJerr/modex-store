import { getAllBlogSlugs } from '@/lib/blogs';
import BlogsList from './components/blogsList';
import Container from '@/components/ui/container';
import { Blog } from '@/types';

const BlogsPage = async () => {
    const blogs: Blog[] = await getAllBlogSlugs();

    return (
    <main className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24 lg:py-24 xl:py-32">
        <Container>
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">MODEX Newsroom & Blog</h1>
            <BlogsList blogs={blogs} />
        </div>
        </Container>
    </main>
    )};
    
    export default BlogsPage;