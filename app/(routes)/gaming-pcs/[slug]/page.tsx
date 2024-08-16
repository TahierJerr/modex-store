import getComputer from "@/actions/get-computer";
import Container from "@/components/ui/container";
import ComputerInfo from "@/components/computer-info";
import type { Metadata } from 'next'
import NoResults from "@/components/ui/no-results";
import ComputerSpec from "@/components/computer-spec";
import ComputerList from "@/components/computer-list";

interface ComputerPageProps {
    params: {
        slug: string;
    }
}

export async function generateMetadata(
{ params }: ComputerPageProps,
): Promise<Metadata> {
    const id = params.slug.split('*').pop();
    
    const computer = await getComputer(id ?? "");
    
    if (!id) {
        return {
            title: 'MODEX Prebuilt Gaming PCs | MODEX',
            description: 'MODEX is the best place to buy your new gaming PC. We have computers for every budget.',
            keywords: ['Computer', 'Gaming PC', 'PC', 'Gaming', 'Gaming Computer', 'Buy Gaming PC',
            'Buy Gaming Computer', 'Order Gaming PC', 'Order Gaming Computer', 'Buy Gaming PC Netherlands',
            'Buy Gaming Computer Netherlands', 'Order Gaming PC Netherlands', 'Order Gaming Computer Netherlands',
            'Budget Gaming PC', 'Budget Gaming Computer', 'Buy Budget Gaming PC', 'Buy Budget Gaming Computer',
            'Order Budget Gaming PC', 'Order Budget Gaming Computer', 'Buy Budget Gaming PC Netherlands',
            'MODEX', 'MODEX Gaming', 'MODEX Gaming PC', 'MODEX Gaming Computer', 'Buy MODEX Gaming PC', 'Buy MODEX Gaming Computer',
            'Order MODEX Gaming PC', 'Order MODEX Gaming Computer', 'Buy MODEX Gaming PC Netherlands',
            ]
        }
    }
    
    return {
        title: `${computer.name} | MODEX`,
        description: `${computer.processor.name} ${computer.graphics.name} ${computer.memory.name}`,
        keywords: [
            'Computer',
            'Gaming PC',
            'PC',
            'Gaming',
            'Gaming Computer',
            'Buy Gaming PC',
            'Buy Gaming Computer',
            'Order Gaming PC',
            'Order Gaming Computer',
            'Buy Gaming PC Netherlands',
            'Buy Gaming Computer Netherlands',
            'Order Gaming PC Netherlands',
            'Order Gaming Computer Netherlands',
            'Budget Gaming PC',
            'Budget Gaming Computer',
            'Buy Budget Gaming PC',
            'Buy Budget Gaming Computer',
            'Order Budget Gaming PC',
            'Order Budget Gaming Computer',
            'Buy Budget Gaming PC Netherlands',
            'MODEX',
            'MODEX Gaming',
            'MODEX Gaming PC',
            'MODEX Gaming Computer',
            'Buy MODEX Gaming PC',
            'Buy MODEX Gaming Computer',
            'Order MODEX Gaming PC',
            'Order MODEX Gaming Computer',
            'Buy MODEX Gaming PC Netherlands',
            computer.name,
            computer.processor.name,
            computer.graphics.name,
            computer.memory.name,
        ],
        openGraph: {
            images: [computer.images[0]]
        },
    }
}

const ComputerPage: React.FC<ComputerPageProps> = async ({ params }) => {
        
    let id;
    if (params.slug) {
        id = params.slug.split('*').pop();
    }
    
    if (!id) {
        return <NoResults />;
    }
    
    const computer = await getComputer(id);
    
    return (
    <div>
    <Container>
        <ComputerInfo data={computer} />
        <ComputerSpec data={computer} />
        <ComputerList maxItems={3} title="Explore more gaming PCs" description="Check out our other per-builds" id={computer.id}/>
    </Container>
    </div>
    )
}

export default ComputerPage;