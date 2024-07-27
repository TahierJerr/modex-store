import getComputer from "@/actions/get-computer";
import Container from "@/components/ui/container";
import ComputerInfo from "@/components/computer-info";
import type { Metadata, ResolvingMetadata } from 'next'
import NoResults from "@/components/ui/no-results";
import getComputers from "@/actions/get-computers";
import ComputerSpec from "@/components/computer-spec";
import ComputerList from "@/components/computer-list";

interface ComputerPageProps {
    params: {
        slug: string;
    }
}

export async function generateMetadata(
{ params }: ComputerPageProps,
parent: ResolvingMetadata
): Promise<Metadata> {
    const id = params.slug.split('*').pop();
    
    const computer = await getComputer(id ?? "");
    
    if (!id) {
        return {
            title: 'MODEX Prebuilt Gaming PCs | MODEX',
            description: 'MODEX is de beste plek om je nieuwe gaming pc te kopen. Wij hebben computers voor elk budget.',
            keywords: ['Computer', 'Gaming PC', 'PC', 'Gaming', 'Gaming Computer', 'Gaming Computer Kopen',
            'Gaming PC Kopen', 'Gaming PC Bestellen', 'Gaming Computer Bestellen', 'Gaming PC Kopen Nederland',
            'Gaming Computer Kopen Nederland', 'Gaming PC Bestellen Nederland', 'Gaming Computer Bestellen Nederland',
            'Budget Gaming PC', 'Budget Gaming Computer', 'Budget Gaming PC Kopen', 'Budget Gaming Computer Kopen',
            'Budget Gaming PC Bestellen', 'Budget Gaming Computer Bestellen', 'Budget Gaming PC Kopen Nederland',
            'MODEX', 'MODEX Gaming', 'MODEX Gaming PC', 'MODEX Gaming Computer', 'MODEX Gaming PC Kopen', 'MODEX Gaming Computer Kopen',
            'MODEX Gaming PC Bestellen', 'MODEX Gaming Computer Bestellen', 'MODEX Gaming PC Kopen Nederland',
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
            'Gaming Computer Kopen',
            'Gaming PC Kopen',
            'Gaming PC Bestellen',
            'Gaming Computer Bestellen',
            'Gaming PC Kopen Nederland',
            'Gaming Computer Kopen Nederland',
            'Gaming PC Bestellen Nederland',
            'Gaming Computer Bestellen Nederland',
            'Budget Gaming PC',
            'Budget Gaming Computer',
            'Budget Gaming PC Kopen',
            'Budget Gaming Computer Kopen',
            'Budget Gaming PC Bestellen',
            'Budget Gaming Computer Bestellen',
            'Budget Gaming PC Kopen Nederland',
            'MODEX',
            'MODEX Gaming',
            'MODEX Gaming PC',
            'MODEX Gaming Computer',
            'MODEX Gaming PC Kopen',
            'MODEX Gaming Computer Kopen',
            'MODEX Gaming PC Bestellen',
            'MODEX Gaming Computer Bestellen',
            'MODEX Gaming PC Kopen Nederland',
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
    const computers = await getComputers({ isFeatured: true });
        
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