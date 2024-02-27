import getComputer from "@/actions/get-computer";
import Container from "@/components/ui/container";
import Gallery from "@/components/gallery";
import ComputerInfo from "@/components/computer-info";
import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from "next/dynamic";
import LoadingNow from "@/components/loading";
import NoResults from "@/components/ui/no-results";
import getComputers from "@/actions/get-computers";

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
        keywords: ['Computer', 'Gaming PC', 'PC', 'Gaming', 'Gaming Computer', 'Gaming Computer Kopen',
        'Gaming PC Kopen', 'Gaming PC Bestellen', 'Gaming Computer Bestellen', 'Gaming PC Kopen Nederland',
        'Gaming Computer Kopen Nederland', 'Gaming PC Bestellen Nederland', 'Gaming Computer Bestellen Nederland',
        'Budget Gaming PC', 'Budget Gaming Computer', 'Budget Gaming PC Kopen', 'Budget Gaming Computer Kopen',
        'Budget Gaming PC Bestellen', 'Budget Gaming Computer Bestellen', 'Budget Gaming PC Kopen Nederland',
        'MODEX', 'MODEX Gaming', 'MODEX Gaming PC', 'MODEX Gaming Computer', 'MODEX Gaming PC Kopen', 'MODEX Gaming Computer Kopen',
        'MODEX Gaming PC Bestellen', 'MODEX Gaming Computer Bestellen', 'MODEX Gaming PC Kopen Nederland',
    ],
        openGraph: {
            images: [computer.images[0]]
        },
    }
}



  const ComputerPage: React.FC<ComputerPageProps> = async ({ params }) => {
    const computers = await getComputers({ isFeatured: true });

    console.log(computers)

    let id;
    if (params.slug) {
      id = params.slug.split('*').pop();
    }
    
    if (!id) {
      return <NoResults />;
    }
  
    const computer = await getComputer(id);

    const ComputerSpec = dynamic(
        () => import("@/components/computer-spec"), {
        loading: () => <div className="flex justify-center items-center my-4"><LoadingNow /></div>
        }
    );

    const ComputerList = dynamic(
        () => import("@/components/computer-list"), {
        loading: () => <div className="flex justify-center items-center my-4"><LoadingNow /></div>
        }
    );

    return (
        <div className="bg-black text-white mt-16 md:mt-0">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={computer.images} />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <ComputerInfo data={computer} />
                        </div>
                    </div>
                    <hr className="my-10 text-black200" />
                    <ComputerSpec data={computer} />
                    <hr className="my-10 text-black200" />
                    <ComputerList maxItems={3} title="Andere Computers" description="Check onze andere pre-builds" id={computer.id}/>
                </div>
            </Container>
        </div>
    )
}

export default ComputerPage;